# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.9](https://github.com/codecov/uploader/compare/v0.1.8...v0.1.9) (2021-11-01)

### Features

- add herokuci provider ([fdabd2e](https://github.com/codecov/uploader/commit/fdabd2ee3fc94a0d03565017bf54e18010b9daf6))
- add network filter ([3bbc222](https://github.com/codecov/uploader/commit/3bbc22247f76d6ea33e6061fad22857c222a2ac0))
- add network prefix ([4d5ee16](https://github.com/codecov/uploader/commit/4d5ee16bc0d96bca7b477017ba664f602b80b11f))
- ignore `*.egg-info` ([54060a8](https://github.com/codecov/uploader/commit/54060a86a52bbeb6763454f4284fe290cb8760ef))

### Bug Fixes

- enable `dot` ([549894c](https://github.com/codecov/uploader/commit/549894ce2a2a0f2a3b93f4e88861d419f7b2a0be))
- use correct variable for args so verbose logs show ([e8455ef](https://github.com/codecov/uploader/commit/e8455ef3cf717eeedceb2c43221a29f64264b077))

### [0.1.8](https://github.com/codecov/uploader/compare/v0.1.7...v0.1.8) (2021-10-21)

### Features

- ignore `*.egg-info` ([6f26dc4](https://github.com/codecov/uploader/commit/6f26dc4d6a41008ff42ec725b39b5864d47407f0))

### Bug Fixes

- use correct variable for args so verbose logs show ([de5f4ef](https://github.com/codecov/uploader/commit/de5f4ef1ba8993f7f4655b3928e9619887b5faca))

### [0.1.7](https://github.com/codecov/uploader/compare/v0.1.5...v0.1.7) (2021-10-19)

### Bug Fixes

- add in remote addr logic ([7f56b9a](https://github.com/codecov/uploader/commit/7f56b9ab6ad1a2206215b85aaf6a6142a50f75c8))
- **deps:** update dependency typescript to v4.4.4 ([968433a](https://github.com/codecov/uploader/commit/968433aa59ecbc306d1d720342d016cb23d76840))
- prefer `token` over `slug` ([2a0c1bc](https://github.com/codecov/uploader/commit/2a0c1bc8aea0d49474196933d60c1892ddaab9a6))
- remove unreachable return ([2fc983d](https://github.com/codecov/uploader/commit/2fc983dd985165c66b6e0aaf1f548bdaaf12f432))
- update azure test ([f7d5fe1](https://github.com/codecov/uploader/commit/f7d5fe1cc6822940e0f226320318a843c6424108))

### [0.1.6](https://github.com/codecov/uploader/compare/v0.1.5...v0.1.6) (2021-10-14)

### Bug Fixes

- add in remote addr logic ([7f56b9a](https://github.com/codecov/uploader/commit/7f56b9ab6ad1a2206215b85aaf6a6142a50f75c8))
- **deps:** update dependency typescript to v4.4.4 ([968433a](https://github.com/codecov/uploader/commit/968433aa59ecbc306d1d720342d016cb23d76840))
- prefer `token` over `slug` ([2a0c1bc](https://github.com/codecov/uploader/commit/2a0c1bc8aea0d49474196933d60c1892ddaab9a6))
- update azure test ([f7d5fe1](https://github.com/codecov/uploader/commit/f7d5fe1cc6822940e0f226320318a843c6424108))

### [0.1.5](https://github.com/codecov/uploader/compare/v0.1.4...v0.1.5) (2021-10-06)

### [0.1.4](https://github.com/codecov/uploader/compare/v0.1.3...v0.1.4) (2021-10-05)

### Features

- use `git ls-files` ([6ff874c](https://github.com/codecov/uploader/commit/6ff874c960c7e94ba9e3029dad0592df2b1ad0d0))

### Bug Fixes

- change `projectRoot` to `dirPath` ([93a82de](https://github.com/codecov/uploader/commit/93a82de9a19966ba87ce7f5da03d024c874e0266))
- correct service name of done.io ci ([46e82d5](https://github.com/codecov/uploader/commit/46e82d56a4e7417eeb92d09e3a5fb9106e4d6234))
- prevent SHA files from being uploaded ([4bbe5e3](https://github.com/codecov/uploader/commit/4bbe5e3eba3f88efbe2ea2ac00ec143fa5046cf2))

### [0.1.3](https://github.com/codecov/uploader/compare/v0.1.2...v0.1.3) (2021-09-30)

### Bug Fixes

- **deps:** update dependency glob to v7.2.0 ([f19bd71](https://github.com/codecov/uploader/commit/f19bd71777a88fcdea07e7594ee505152e926124))
- **deps:** update dependency yargs to v17.2.0 ([9c70e07](https://github.com/codecov/uploader/commit/9c70e07ddcdabdde545748e0395511b927f25681))
- **deps:** update dependency yargs to v17.2.1 ([670257e](https://github.com/codecov/uploader/commit/670257e883f501c1813d45f1b4ab75e59053c85b))

### [0.1.2](https://github.com/codecov/uploader/compare/v0.1.1...v0.1.2) (2021-09-22)

### Features

- add flag to display changelog ([de6f3a4](https://github.com/codecov/uploader/commit/de6f3a4503810fac72305bb09dc3af7370ec7da6))

### 0.1.1 (2021-09-22)

### Features

- add bitbucket pipelines support ([08b2c66](https://github.com/codecov/uploader/commit/08b2c66732af6ac77500b92bb6aaa07e5324a0ed))
- add getToken helper ([ce14f26](https://github.com/codecov/uploader/commit/ce14f264c789ebe5fa393d4474a21aafca3aa519))
- add helper method for validating shas ([d26393e](https://github.com/codecov/uploader/commit/d26393ec35a3b9f2533516ff7d31d7d53e076d03))
- Add Jenkins CI provider ([30c786b](https://github.com/codecov/uploader/commit/30c786bcef766a7569a794ec8035a6d17f5358b4))
- Allow for source from wrappers ([d8159ac](https://github.com/codecov/uploader/commit/d8159ac652664ad56ec92394c8c18327df81e7bb))
- Allow for token from yaml ([a2e5f4f](https://github.com/codecov/uploader/commit/a2e5f4faaf418120b08df5c220d4e7e05cd14ceb))
- Appveyor provider ([9e67223](https://github.com/codecov/uploader/commit/9e67223bcc9f73e16bf4751da831019b6d7b1b77))
- Azure Provider ([4255fe9](https://github.com/codecov/uploader/commit/4255fe94c1ae01bc84eaffdfa022ff6ede384176))
- New Bitbucket provider ([0a014a2](https://github.com/codecov/uploader/commit/0a014a2ffb692de3a691472e7e8f526d93d5efcf))

### Bug Fixes

- [@returns](https://github.com/returns) JSDoc annotations for string ([#162](https://github.com/codecov/uploader/issues/162)) ([8230f56](https://github.com/codecov/uploader/commit/8230f56315268ec37934c603cf0a31a57a72f62e))
- Add default Jenkins slug ([3d9e84a](https://github.com/codecov/uploader/commit/3d9e84ab7ca80bffe9eb18247a992a86b1a79309))
- Add default Teamcity slug ([cfb2ac4](https://github.com/codecov/uploader/commit/cfb2ac43b0354b1ca4582c5d39892df62528785f))
- add export that was removed in error ([a610e0f](https://github.com/codecov/uploader/commit/a610e0f2a33e6feac3f4351623375208360bb401))
- Add more tests ([02d1f24](https://github.com/codecov/uploader/commit/02d1f242cb798db80b31b6824938e0cffaca607d))
- Add more tests ([0bbdc80](https://github.com/codecov/uploader/commit/0bbdc800b0dbde509fd710ac55ae4242f899b254))
- Add some tests ([c7968b8](https://github.com/codecov/uploader/commit/c7968b868bfc0165c7081b7eb2bc45414962460a))
- Add tests for deprecation warning ([cd6131c](https://github.com/codecov/uploader/commit/cd6131ca72c1de386768383a366ade245b89f80d))
- add token querystring ([d2e907a](https://github.com/codecov/uploader/commit/d2e907aca6c6fa35c343715913c68ab5ad525ebe))
- Add verbose env var names ([fbbf728](https://github.com/codecov/uploader/commit/fbbf7283ee691a43d02c44c5af56d6a32ec654a7))
- Allow multiple files to be read ([a231eef](https://github.com/codecov/uploader/commit/a231eef600d49f90c603b57bf293b2f6c2d21c8c))
- Allow multiple flags to be specified ([1909306](https://github.com/codecov/uploader/commit/19093069d46410d45273b36630abce01efff1801))
- always pass pr to server as a number ([957509e](https://github.com/codecov/uploader/commit/957509e791b3fdb90b2d3b7b54e178a734ff14dd))
- can't use before declared ([57c3a92](https://github.com/codecov/uploader/commit/57c3a9299763b11d8520a5e5ab5b8c0cb7c6316b))
- casting undefined t boolean is false ([65ff85e](https://github.com/codecov/uploader/commit/65ff85e6e25241108402b9ebbb27c4a0c5421d2c))
- change name to custom ([8cc89a9](https://github.com/codecov/uploader/commit/8cc89a9612d92d28bf5235539ff88449b568eb3f))
- change to use execFileSync for security ([92f2c5a](https://github.com/codecov/uploader/commit/92f2c5aefd54c878f1d3c743451847f4cdf3d321))
- codebuild args ([34bc976](https://github.com/codecov/uploader/commit/34bc9765adb6c780a4cdda211d75c2f1747d0dd1))
- correct flag name regex, remove `x-` from some headers ([#160](https://github.com/codecov/uploader/issues/160)) ([7c017c7](https://github.com/codecov/uploader/commit/7c017c727e540cc344c8766821a72f4812bfcf2e)), closes [#150](https://github.com/codecov/uploader/issues/150) [#144](https://github.com/codecov/uploader/issues/144) [#156](https://github.com/codecov/uploader/issues/156) [#147](https://github.com/codecov/uploader/issues/147) [#157](https://github.com/codecov/uploader/issues/157) [#158](https://github.com/codecov/uploader/issues/158)
- correct flags regex to match server and docs ([#147](https://github.com/codecov/uploader/issues/147)) ([6d2a1ac](https://github.com/codecov/uploader/commit/6d2a1ac53dc74ae96a9182720d5927579023b239))
- correct headers ([#149](https://github.com/codecov/uploader/issues/149)) ([cffff17](https://github.com/codecov/uploader/commit/cffff17dbcd418e7d55276e6c5d9f596c409d1d4)), closes [#145](https://github.com/codecov/uploader/issues/145)
- correct travis ci detection ([6c7d150](https://github.com/codecov/uploader/commit/6c7d15055c4ad75d1d897f60a7b26bcbf56810e0)), closes [#284](https://github.com/codecov/uploader/issues/284)
- correct typo ([f814be1](https://github.com/codecov/uploader/commit/f814be1063bbfb73b422641d7f7a722be59d3716))
- correctly validate token ([4faa6cd](https://github.com/codecov/uploader/commit/4faa6cd814b2efb05b092145e22846f844cd870a))
- **deps:** pin dependency fast-glob to 3.2.7 ([c4231c2](https://github.com/codecov/uploader/commit/c4231c2d1aa8d2bb49ce0e966f53daca09f186ce))
- **deps:** pin dependency snake-case to 3.0.4 ([a8e50a7](https://github.com/codecov/uploader/commit/a8e50a70040afc60f792717b6cbb4d8e4a9720ae))
- **deps:** update dependency glob to v7.1.7 ([#81](https://github.com/codecov/uploader/issues/81)) ([635cb4d](https://github.com/codecov/uploader/commit/635cb4dbfe4cb1aabe8e7f35569871a0077bb5c4))
- **deps:** update dependency superagent to v5.3.1 ([#64](https://github.com/codecov/uploader/issues/64)) ([587df9b](https://github.com/codecov/uploader/commit/587df9bb0dccbb095c407c5c408b195bc8cda0c6))
- **deps:** update dependency superagent to v6 ([#69](https://github.com/codecov/uploader/issues/69)) ([85fdd82](https://github.com/codecov/uploader/commit/85fdd825be76d2fb18bcf0f4b7fa6db738cd4556))
- **deps:** update dependency typescript to v4.4.2 ([7de1690](https://github.com/codecov/uploader/commit/7de1690ba5120fe6a63cd733996422996b118724))
- **deps:** update dependency typescript to v4.4.3 ([ba7ef2b](https://github.com/codecov/uploader/commit/ba7ef2bad67df4ad8e204e2bfcad5ee5b6287cd4))
- **deps:** update dependency validator to v13.6.0 ([#65](https://github.com/codecov/uploader/issues/65)) ([aaf3639](https://github.com/codecov/uploader/commit/aaf36392685f0c5e9049790f5fe708712c9d24af))
- **deps:** update dependency yargs to v16 ([#70](https://github.com/codecov/uploader/issues/70)) ([dabad4d](https://github.com/codecov/uploader/commit/dabad4dace0c37527d7f765c3619a347b2bca4be))
- **deps:** update dependency yargs to v17 ([ba9abde](https://github.com/codecov/uploader/commit/ba9abdecbbe683cfce5e6609b976b6b6fcc503e3))
- do not log token ([b514561](https://github.com/codecov/uploader/commit/b5145616b844937ac6640fd13e5b742915177ce0))
- duplicate in merge resolution ([19fb161](https://github.com/codecov/uploader/commit/19fb161aa6a45e102377f87b2d690b262fed62bb))
- export error ([3fa6add](https://github.com/codecov/uploader/commit/3fa6add0f23bd74f01df7c20edf98bae9d2f0216))
- fail validate token if uploader url differs ([45dea0f](https://github.com/codecov/uploader/commit/45dea0f2ee1d7d4ed2dedf5fd9498229784c3ca3))
- Fix previous tests ([e9f46df](https://github.com/codecov/uploader/commit/e9f46dff94719e08715bbe85e31ce7c6110c817d))
- insert calm and professional review ([4270c8b](https://github.com/codecov/uploader/commit/4270c8ba6847fb197a660b783957efe3845ccc2b))
- install types and coerce yaml ([6aa518f](https://github.com/codecov/uploader/commit/6aa518f83ad17e7020ddaa4bee6e13c986071758))
- nonzero exit ([afb7c0d](https://github.com/codecov/uploader/commit/afb7c0d8a87b4d2d4b9de2f6fcb97ea054a1c7f2))
- npm-shrinkwrap ([a112caa](https://github.com/codecov/uploader/commit/a112caa9c9ee0e08964fea781177c6c3e80a3cc8))
- npm-shrinkwrap ([52f9d72](https://github.com/codecov/uploader/commit/52f9d72ae4ea0d62a54eae47645dc85ac1279cc3))
- Parse multiple flags properly ([af143b1](https://github.com/codecov/uploader/commit/af143b13541d0f55ce93a3bdd9f948e6896b290e))
- paths work correctly on windows ([5856d15](https://github.com/codecov/uploader/commit/5856d15b622c529f8c0173fe0c45f8a599bee71b))
- paths work correctly on windows ([#143](https://github.com/codecov/uploader/issues/143)) ([8bbff35](https://github.com/codecov/uploader/commit/8bbff35967b0ea4e075c81125a0f2e0f2d8d7151))
- Refactor and fix no coverage files provided ([f722b8d](https://github.com/codecov/uploader/commit/f722b8d43a8e1d1fdb2afdc29aeca84b009e834e))
- Remove **pycache** and .tox folders from search ([e79655e](https://github.com/codecov/uploader/commit/e79655ee66a44e8e5ab5880fdb1481ea83bdecfc))
- Remove clean call ([b238723](https://github.com/codecov/uploader/commit/b238723f272a3496737cb31d3185dd9e830a2233))
- Remove export of function \_getPR ([edd7158](https://github.com/codecov/uploader/commit/edd71586df877930fc31773b44952321ce58da9d))
- Remove from manualBlacklist ([e6a942b](https://github.com/codecov/uploader/commit/e6a942bf38f3f9af485ed4e666bc4c5a4e57fc8a))
- Remove hg command from remoteAddr ([f45dc7f](https://github.com/codecov/uploader/commit/f45dc7feddfd40afe45ab41ffcb8ec60d5c4ed6f))
- Remove invalid and dupliate file paths ([93ec274](https://github.com/codecov/uploader/commit/93ec274dd2d27acbbd6d5335a232454c023d7951))
- Remove shell commands ([07c7c3b](https://github.com/codecov/uploader/commit/07c7c3ba0274924a1ac730a26b60a94d26b7772e))
- remove unused function (fetchToken) ([69d94ee](https://github.com/codecov/uploader/commit/69d94eea52eae54eafde4c02b760a931ce4c8d1f))
- Revert circleci config changes ([fb89052](https://github.com/codecov/uploader/commit/fb89052033e40599c72de80147dd3185312f82ad))
- run type-check and correct invalid calls ([1af411c](https://github.com/codecov/uploader/commit/1af411c515e4e508dbc4aaa2ea752c13fa96e3fe))
- Specify log if no token available or empty ([48e9542](https://github.com/codecov/uploader/commit/48e9542d8a2eceedffc472156654c3f4306cab5f))
- Support globs in files ([1733f9c](https://github.com/codecov/uploader/commit/1733f9c883f056bce9d4a1228918e031468ded6f))
- Tests ([2f7f7dc](https://github.com/codecov/uploader/commit/2f7f7dce9e4b1fc00d343a8c2eccef1b1b170d8b))
- Token should be codecov.token and update symlinks ([d2cc56d](https://github.com/codecov/uploader/commit/d2cc56d18633080896c3d25a66eee924e4e52db2))
- Try to use args before git ([65b78ad](https://github.com/codecov/uploader/commit/65b78ade47749cf9cc40b544e2592638761c66f6))
- Update tests ([f7b4a09](https://github.com/codecov/uploader/commit/f7b4a09576f2424189cd00d7a4f0b11e6edc4f72))
- Update tests ([e9c9b64](https://github.com/codecov/uploader/commit/e9c9b64b9a5da0698ad37ff9d4f1fabc0c865068))
- url parsing from post results ([5ad8bd3](https://github.com/codecov/uploader/commit/5ad8bd3760fa2d3bd0d518454e2ff6eb953b4f68)), closes [#316](https://github.com/codecov/uploader/issues/316)
- use posix path ([#141](https://github.com/codecov/uploader/issues/141)) ([186f731](https://github.com/codecov/uploader/commit/186f7317a870f929405fcd63273a052c10a16d1e))
- Use remote address not VCS ([54a2666](https://github.com/codecov/uploader/commit/54a2666476cdd78c441bbf77331c74a5f7da0a9e))
- Validate UUID tokens ([1756b26](https://github.com/codecov/uploader/commit/1756b26ba8edce9cce90831234353ce188d87b73))
- we do not supoort hg ([47b8de3](https://github.com/codecov/uploader/commit/47b8de3bd1298590cf02169bb1bd208294786854))
- windows patjs not work correctly ([92841d8](https://github.com/codecov/uploader/commit/92841d81c1dd01d69b051a01523c18eac553fbbe))

# Changes Since

- fix: throw if token validation fails
- fix: do not validate token if uploader url is changed with `-u`

* refactor: move default url out of function for flexibility

- fix: remove unused function (fetchToken)

# 0.1.x (Beta)
