import childProcess, { spawnSync } from 'child_process'
import glob from 'fast-glob'
import fs from 'fs'
import { readFile } from 'fs/promises'
import { posix as path } from 'path'
import { UploaderArgs } from '../types'
import { logError, verbose } from './logger'

export const MARKER_NETWORK_END = '\n<<<<<< network\n'
export const MARKER_FILE_END = '<<<<<< EOF\n'
export const MARKER_ENV_END = '<<<<<< ENV\n'

const globstar = (pattern: string) => `**/${pattern}`

/**
 *
 * @param {string} projectRoot
 * @param {Object} args
 * @returns {Promise<string>}
 */
export async function getFileListing(
  projectRoot: string,
  args: UploaderArgs,
): Promise<string> {
  return getAllFiles(projectRoot, projectRoot, args).join('\n')
}

export function manualBlacklist(): string[] {
  // TODO: honor the .gitignore file instead of a hard-coded list
  return [
    '.DS_Store',
    '.circleci',
    '.git',
    '.gitignore',
    '.nvmrc',
    '.nyc_output',
    'bower_components',
    'jspm_packages',
    'node_modules',
    'vendor',
  ]
}

export function globBlacklist(): string[] {
  // TODO: honor the .gitignore file instead of a hard-coded list
  return [
    '__pycache__',
    'node_modules/**/*',
    'vendor',
    '.circleci',
    '.git',
    '.gitignore',
    '.nvmrc',
    '.nyc_output',
    '.tox',
    '*.am',
    '*.bash',
    '*.bat',
    '*.bw',
    '*.cfg',
    '*.class',
    '*.cmake',
    '*.cmake',
    '*.conf',
    '*.coverage',
    '*.cp',
    '*.cpp',
    '*.crt',
    '*.css',
    '*.csv',
    '*.csv',
    '*.data',
    '*.db',
    '*.dox',
    '*.ec',
    '*.ec',
    '*.egg',
    '*.egg-info',
    '*.el',
    '*.env',
    '*.erb',
    '*.exe',
    '*.ftl',
    '*.gif',
    '*.gradle',
    '*.gz',
    '*.h',
    '*.html',
    '*.in',
    '*.jade',
    '*.jar*',
    '*.jpeg',
    '*.jpg',
    '*.js',
    '*.less',
    '*.log',
    '*.m4',
    '*.mak*',
    '*.map',
    '*.md',
    '*.o',
    '*.p12',
    '*.pem',
    '*.png',
    '*.pom*',
    '*.profdata',
    '*.proto',
    '*.ps1',
    '*.pth',
    '*.py',
    '*.pyc',
    '*.pyo',
    '*.rb',
    '*.rsp',
    '*.rst',
    '*.ru',
    '*.sbt',
    '*.scss',
    '*.scss',
    '*.serialized',
    '*.sh',
    '*.snapshot',
    '*.sql',
    '*.svg',
    '*.tar.tz',
    '*.template',
    '*.ts',
    '*.whl',
    '*.xcconfig',
    '*.xcoverage.*',
    '*/classycle/report.xml',
    '*codecov.yml',
    '*~',
    '.*coveragerc',
    '.coverage*',
    'codecov.SHA256SUM',
    'codecov.SHA256SUM.sig',
    'coverage-summary.json',
    'createdFiles.lst',
    'fullLocaleNames.lst',
    'include.lst',
    'inputFiles.lst',
    'phpunit-code-coverage.xml',
    'phpunit-coverage.xml',
    'remapInstanbul.coverage*.json',
    'scoverage.measurements.*',
    'test-result-*-codecoverage.json',
    'test_*_coverage.txt',
    'testrunner-coverage*',
  ]
}

export function coverageFilePatterns(): string[] {
  return [
    '*coverage*.*',
    'nosetests.xml',
    'jacoco*.xml',
    'clover.xml',
    'report.xml',
    '*.codecov.!(exe)',
    'codecov.!(exe)',
    'cobertura.xml',
    'excoveralls.json',
    'luacov.report.out',
    'coverage-final.json',
    'naxsi.info',
    'lcov.info',
    'lcov.dat',
    '*.lcov',
    '*.clover',
    'cover.out',
    'gcov.info',
    '*.gcov',
    '*.lst',
  ]
}

const EMPTY_STRING = '' as const

const isNegated = (path: string) => path.startsWith('!')

/**
 *
 * @param {string} projectRoot
 * @param {string[]} coverageFilePatterns
 * @returns {Promise<string[]>}
 */
export async function getCoverageFiles(
  projectRoot: string,
  coverageFilePatterns: string[],
  args: UploaderArgs,
): Promise<string[]> {
  const globstar = (pattern: string) => `**/${pattern}`
  verbose(
    `Possible coverage patterns, prior to globbing ${coverageFilePatterns}`,
    Boolean(args.verbose),
  )

  return glob(coverageFilePatterns.map((pattern: string) => {
    const parts = []

    if (isNegated(pattern)) {
      parts.push('!')
      parts.push(globstar(pattern.substr(1)))
    } else {
      parts.push(globstar(pattern))
    }
    const joinedPaths = parts.join(EMPTY_STRING)
    verbose(
      `Possible coverage patterns, after globbing ${joinedPaths}`,
      Boolean(args.verbose),
    )
    return joinedPaths
  }), {
    cwd: projectRoot,
    ignore: [...manualBlacklist(), ...globBlacklist()],
  })
}

export function fetchGitRoot(): string {
  try {
    return (
      childProcess.spawnSync('git', ['rev-parse', '--show-toplevel'], {
        encoding: 'utf-8',
      }).stdout || process.cwd()
    ).trimRight()
  } catch (error) {
    throw new Error('Error fetching git root. Please try using the -R flag.')
  }
}

/**
 *
 * @param {string} projectRoot Root of the project
 * @param {string} dirPath Directory to search in
 * @param {Object} args
 * @returns {string[]}
 */
export function getAllFiles(
  projectRoot: string,
  dirPath: string,
  args: UploaderArgs,
): string[] {
  verbose(`Searching for files in ${dirPath}`, Boolean(args.verbose))

  const {
    stdout,
    status,
    error,
  } = spawnSync('git', ['-C', dirPath, 'ls-files'], { encoding: 'utf8' })

  return error instanceof Error || status !== 0
    ? glob
      .sync(['**/*', '**/.[!.]*'], {
        cwd: dirPath,
        ignore: manualBlacklist().map(globstar),
      })
    : stdout.split(/[\r\n]+/)
}

/**
 *
 * @param {string} projectRoot
 * @param {string} filePath
 * @returns {string}
 */
export async function readCoverageFile(
  projectRoot: string,
  filePath: string,
): Promise<string> {
  return readFile(getFilePath(projectRoot, filePath), {
    encoding: 'utf-8',
  }).catch(err => {
    throw new Error(`There was an error reading the coverage file: ${err}`)
  })
}

/**
 *
 * @param {string} projectRoot
 * @param {string} filePath
 * @returns boolean
 */
export function fileExists(projectRoot: string, filePath: string): boolean {
  return fs.existsSync(getFilePath(projectRoot, filePath))
}

/**
 *
 * @param {string} filePath
 * @returns string
 */
export function fileHeader(filePath: string): string {
  return `# path=${filePath}\n`
}

/**
 *
 * @param {string} projectRoot
 * @param {string} filePath
 * @returns {string}
 */
export function getFilePath(projectRoot: string, filePath: string): string {
  if (
    filePath.startsWith('./') ||
    filePath.startsWith('/') ||
    filePath.startsWith('.\\') ||
    filePath.startsWith('.\\')
  ) {
    return filePath
  }
  if (projectRoot === '.') {
    return path.join('.', filePath)
  }
  return path.join(projectRoot, filePath)
}

/**
 *
 * @param {string} projectRoot
 * @param {string} filePath
 */
export function removeFile(projectRoot: string, filePath: string): void {
  fs.unlink(getFilePath(projectRoot, filePath), err => {
    if (err) {
      logError(`Error removing ${filePath} coverage file`)
    }
  })
}
