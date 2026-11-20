# Node.js Starter

A minimal template for building a [Node.js](https://nodejs.org/en) library in [TypeScript](https://www.typescriptlang.org/) with [ESM](https://nodejs.org/api/esm.html) support and an optional CLI. Ships pre-configured with formatting, linting, 100% test coverage enforcement, pre-commit hooks, and CI.

## Getting Started

Create a new repository from this template on GitHub using [this link](https://github.com/new?template_name=nodejs-starter&template_owner=threeal), or clone it locally and point it at your own remote.

## Setup

Install [pnpm](https://pnpm.io/), then install dependencies:

```sh
pnpm install
```

Install [Lefthook](https://lefthook.dev/), then register the pre-commit hook:

```sh
lefthook install
```

## Customizing

Replace or extend the template files to fit your project:

- **`src/`** — Replace the placeholder library, CLI, and tests with your own code.
- **`CLAUDE.md`** — Replace with guidance specific to your project.
- **`LICENSE`** — Replace with your preferred license, or keep the [Unlicense](https://unlicense.org/).
- **`package.json`** — Update the package name, description, version, author, and other metadata.
- **`README.md`** — Replace with a description of your project.

If your project doesn't need a CLI, remove `src/cli.ts`, the `bin` entry in `package.json`, and the `yargs` and `@types/yargs` dependencies.

## Development

Run the tests with coverage through Vitest:

```sh
pnpm vitest run
```

The project enforces 100% code coverage, counting only files the tests import.

Each `git commit` runs the pre-commit hook registered during setup, which checks your changes and fixes what it can in place. If it fails, fix any reported issues, re-stage the changed files, and commit again.

After committing, push to `main` or open a pull request from another branch — CI will run the same checks across all files, plus additional checks of its own.

## Releasing

Update the version in `package.json` and in the CLI's `--version` in `src/cli.ts`, push a version tag, and create a GitHub Release. To publish to the [npm registry](https://www.npmjs.com/), run:

```sh
pnpm publish
```

## Framework-Specific Templates

For a more opinionated starting point in a specific framework:

- **[Action Starter](https://github.com/threeal/action-starter)** — JavaScript GitHub Action projects.
- **[Discord Bot Starter](https://github.com/threeal/discord-bot-starter)** — Discord bot projects.
- **[React Starter](https://github.com/threeal/react-starter)** — React app projects.
