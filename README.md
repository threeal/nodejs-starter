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

- **`src/cli/`** — Replace or remove the placeholder CLI commands. Remove this folder and the `bin` entry in `package.json` if your project doesn't need a CLI.
- **`src/fibonacci.ts`** — Replace with your own library logic.
- **`src/index.ts`** — Update the public API exports to match your library.
- **`CLAUDE.md`** — Replace with guidance specific to your project.
- **`LICENSE`** — Replace with your preferred license, or keep the [Unlicense](https://unlicense.org/).
- **`package.json`** — Update the project name, description, version, and other metadata.
- **`README.md`** — Replace with a description of your project.

## Development

Write code in `src/`. Test files live alongside source as `*.test.ts`. Run the test suite with:

```sh
pnpm vitest run
```

The project enforces 100% code coverage on every run.

Before committing, run the pre-commit hook to install dependencies, type-check, and fix formatting and lint:

```sh
lefthook run pre-commit
```

If any file changes during the run, re-stage the changed files and retry. The hook also runs automatically on each `git commit` — if it fails, fix the reported issues, re-stage, and commit again.

After committing, push to `main` or open a pull request from another branch — CI will run the pre-commit hook across all files, the full test suite, and `pnpm pack`.

## Releasing

Update the version in `package.json`, push a version tag, and create a GitHub Release. To publish to the npm registry, run:

```sh
pnpm publish
```

## Framework-Specific Templates

For a more opinionated starting point in a specific framework:

- **[Action Starter](https://github.com/threeal/action-starter)** — JavaScript GitHub Action projects.
- **[Discord Bot Starter](https://github.com/threeal/discord-bot-starter)** — Discord bot projects.
