![alt Prezly ❤️ Slate](https://cdn.uc.assets.prezly.com/b9c8de97-cc75-4780-baa0-c9d9ac4c7c09/prezly-slate.png)

![Build](https://github.com/kamilmielnik/scrabble-solver/workflows/Build/badge.svg)
![Test](https://github.com/kamilmielnik/scrabble-solver/workflows/Test/badge.svg)
![Prettier](https://github.com/prezly/slate/workflows/Prettier/badge.svg)

[Prezly](https://www.prezly.com/) software built upon [Slate](http://slatejs.org/).

---

# Packages

Every package has been implemented with TypeScript.

Prezly-specific packages mention Prezly in the description. All other packages should be generic and reusable in any project.

| Package                                                                              | Version                                                            | License                                                            | Readme                                            | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [@prezly/linear-partition](https://www.npmjs.com/package/@prezly/linear-partition)   | ![Version](https://img.shields.io/npm/v/@prezly/linear-partition)  | ![License](https://img.shields.io/npm/l/@prezly/linear-partition)  | [README.md](packages/linear-partition/README.md)  | [Solution to The Partition Problem](https://github.com/technically-php/linear-partitioning/blob/master/src/LinearPartitioning.php)               |
| [@prezly/slate-commons](https://www.npmjs.com/package/@prezly/slate-commons)         | ![Version](https://img.shields.io/npm/v/@prezly/slate-commons)     | ![License](https://img.shields.io/npm/l/@prezly/slate-commons)     | [README.md](packages/slate-commons/README.md)     | Low-level commands, utilities, plugins, types, etc. used throughout [Prezly](https://www.prezly.com/)-[Slate](https://www.slatejs.org/) packages |
| [@prezly/slate-hyperscript](https://www.npmjs.com/package/@prezly/slate-hyperscript) | ![Version](https://img.shields.io/npm/v/@prezly/slate-hyperscript) | ![License](https://img.shields.io/npm/l/@prezly/slate-hyperscript) | [README.md](packages/slate-hyperscript/README.md) | Hyperscript helpers for creating [Slate](https://www.slatejs.org/) documents with JSX                                                            |
| [@prezly/slate-renderer](https://www.npmjs.com/package/@prezly/slate-renderer)       | ![Version](https://img.shields.io/npm/v/@prezly/slate-renderer)    | ![License](https://img.shields.io/npm/l/@prezly/slate-renderer)    | [README.md](packages/slate-renderer/README.md)    | Render [Slate](https://www.slatejs.org/) documents used at [Prezly](https://www.prezly.com/)                                                     |
| [@prezly/slate-types](https://www.npmjs.com/package/@prezly/slate-types)             | ![Version](https://img.shields.io/npm/v/@prezly/slate-types)       | ![License](https://img.shields.io/npm/l/@prezly/slate-types)       | [README.md](packages/slate-types/README.md)       | TypeScript definitions for [Slate](https://www.slatejs.org/) document structure used at [Prezly](https://www.prezly.com/)                        |

# Development

## Setup

```Shell
npm install         # install dependencies
npm run bootstrap   # bootstrap packages with lerna
npm run build       # build all packages
```

## Publishing

```Shell
npm run release     # reinstall & rebuild everything from scratch and...
                    # ...and run a wizard that'll guide you through bulk-publishing the npm packages
```
