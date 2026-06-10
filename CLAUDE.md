# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Template notice:** This file describes the template repository itself. If working in a project derived from this template, inform the user that this CLAUDE.md still contains template guidance and should be updated with project-specific content.

## About This Repository

This is a minimal Node.js library and CLI starter template written in TypeScript targeting Node 24 (ESM). The Fibonacci sequence code in `src/` is a placeholder — replace it with your actual library and CLI logic when starting a new project.

## Architecture

### Source Files

- **`src/cli/commands/`** — Individual yargs command modules; each exports a `createXxxCommand()` factory that accepts injected streams/deps for testability.
- **`src/cli/index.ts`** — CLI entry point built with yargs that wires commands and parses `process.argv`.
- **`src/fibonacci.ts`** — The library implementation (currently a Fibonacci sequence generator as a placeholder example).
- **`src/index.ts`** — The library's public API (re-exports from implementation modules).
- **`src/*.test.ts`** — Vitest test files co-located with source.

### Build Outputs

- **`dist/cli/index.js`** — CLI binary.
- **`dist/index.js`** + **`dist/index.d.ts`** — Library entry (exported as `"."`).

## Tooling

### Dependabot

Keeps GitHub Actions and npm dependencies up to date automatically via `.github/dependabot.yaml`.

### ESLint

Linter configured in `eslint.config.ts`.

### GitHub Actions

Automates CI. Workflow files:

- **`.github/workflows/ci.yaml`** — Triggers on push to `main`, pull requests, and manual dispatch.

### Lefthook

Git hook manager configured in `lefthook.yaml`.

### pnpm

Package manager. Also manages the Node.js runtime — versions for Node.js and pnpm are pinned in `package.json`.

### Prettier

Formatter configured in `.prettierrc.json` using `prettier-plugin-organize-imports` — import order is auto-managed.

### TypeScript

Type checker and compiler. `tsconfig.json` is used for type checking via `pnpm tsc`; `tsconfig.build.json` is used for compilation via `pnpm pack`.

Both configs set `moduleResolution: node16`, which requires all import paths to use `.js` extensions — even when importing `.ts` source files.

### Vitest

Test runner configured in `vitest.config.ts` with 100% coverage threshold required on every test run.

## Checking and Fixing

Run the pre-commit hook:

```sh
lefthook run pre-commit              # staged files only (default)
lefthook run pre-commit --all-files  # all files — matches what CI runs
```

If any file changes during the run, re-stage the changed files and retry.

## Testing

```sh
pnpm vitest run             # Run all tests
pnpm vitest run <file>      # Run a single test file
```

Coverage is always enabled and computed for all files imported during the test run. Running a single test file may fail the 100% threshold if it imports a source file that another test is responsible for fully covering — use the full suite for accurate results.

## Building and Packaging

Use `pnpm pack` to build and package the library into a tarball (e.g. for publishing to npm). The `prepack` script runs `tsc -p tsconfig.build.json` automatically before packing.
