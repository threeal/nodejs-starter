# Node.js Starter

A minimal template for starting a new [Node.js](https://nodejs.org/en) project.

## Features

- [TypeScript](https://www.typescriptlang.org/) library and CLI with [ESM](https://nodejs.org/api/esm.html) support
- [pnpm](https://pnpm.io/) as the package manager
- [Vitest](https://vitest.dev/) for testing with 100% code coverage enforcement
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for linting
- [Lefthook](https://lefthook.dev/) for pre-commit hooks
- [GitHub Actions](https://github.com/features/actions) for CI workflows
- [Dependabot](https://docs.github.com/en/code-security/dependabot) for automated dependency updates

## Getting Started

### 1. Create a Project

[Create a new repository from this template](https://github.com/new?template_name=nodejs-starter&template_owner=threeal) on GitHub, or clone it locally:

```sh
git clone https://github.com/threeal/nodejs-starter.git my-project
cd my-project
```

### 2. Update Project Information

Replace the placeholder content in these files with your project's actual information:

- **[`LICENSE`](./LICENSE)** — Replace with your project's license, or remove it to keep the project unlicensed.
- **[`package.json`](./package.json)** — Update the project name, version, description, author, and other metadata.
- **[`README.md`](./README.md)** — Replace this file with a description of your project.

### 3. Install Tools

Install [pnpm](https://pnpm.io/installation) if not already available, then install project dependencies:

```sh
pnpm install
```

To enable pre-commit hooks, install [Lefthook](https://lefthook.dev/installation/) independently, then set up the hooks:

```sh
lefthook install
```

### 4. Develop

The library entry point is [`src/lib.ts`](./src/lib.ts) and the CLI entry point is [`src/bin.ts`](./src/bin.ts). Replace the placeholder code in both files with your actual implementation.

Run the CLI directly without compiling:

```sh
pnpm start
```

To type-check, format, or lint manually:

```sh
pnpm tsc               # Type-check
pnpm prettier --write . # Fix formatting
pnpm eslint --fix      # Fix linting issues
```

> If your project doesn't need a CLI, remove `src/bin.ts` and the `bin` field from `package.json`.

### 5. Test

Test files are named `*.test.ts` and live alongside their source files. Run all tests with:

```sh
pnpm test
```

Tests must pass with 100% code coverage.

### 6. Release

Compile TypeScript and package the library:

```sh
pnpm pack
```

This produces a `.tgz` tarball to include in your GitHub release. Ensure `package.json` has the correct version before running this.
