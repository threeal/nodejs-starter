# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Template notice:** This file describes the template repository itself. If working in a project derived from this template, inform the user that this CLAUDE.md still contains template guidance and should be updated with project-specific content.

## About This Repository

This is a minimal Node.js library and CLI starter template written in TypeScript targeting Node 24 (ESM). The Fibonacci sequence code in `src/` is a placeholder — replace it with your actual library and CLI logic when starting a new project.

## Architecture

### Source Files

- **`src/fibonacci.ts`** — The library implementation (currently a Fibonacci sequence generator as a placeholder example).
- **`src/index.ts`** — The library's public API (re-exports from implementation modules).
- **`src/cli/index.ts`** — CLI entry point built with yargs that wires commands and parses `process.argv`.
- **`src/cli/commands/`** — Individual yargs command modules; each exports a `createXxxCommand()` factory that accepts injected streams/deps for testability.
- **`src/*.test.ts`** — Vitest test files co-located with source.

### TypeScript Configuration

Both configs extend `@tsconfig/node24`, which sets `module: nodenext` and `moduleResolution: node16`. This requires import paths to use `.js` extensions even when importing `.ts` source files.

- **`tsconfig.json`** — Type-check config with `noEmit: true`; used by `pnpm tsc`.
- **`tsconfig.build.json`** — Build config; includes `src/`, excludes test files; sets `rootDir: "src"` so output maps directly to `dist/` (not `dist/src/`); includes `types: ["node"]`; emits declaration and JS files.

### Build Outputs

- `dist/index.js` + `dist/index.d.ts` — library entry (exported as `"."`).
- `dist/cli/index.js` — CLI binary (registered as the `fibonacci-sample` bin via shorthand `"bin": "dist/cli/index.js"` in `package.json`, which derives the name from the package name).

## Tooling

- **pnpm** is the package manager. `devEngines.runtime` in `package.json` specifies the Node.js version (`onFail: "download"` triggers automatic download if needed); `packageManager` pins the pnpm version; `engines.node` asserts Node >=24.
- **ESLint** uses flat config (`eslint.config.ts`) with `@eslint/js` recommended rules and `typescript-eslint` strict + stylistic type-checked rules.
- **Prettier** uses `prettier-plugin-organize-imports` — import order is auto-managed.
- **Lefthook** manages Git hooks via `lefthook.yaml`. It is a standalone binary, not a pnpm package.
- **jiti** runs TypeScript files directly without compiling.
- **Vitest** uses `vitest.config.ts` with `coverage.enabled: true`, `reporter: "text"`, and `thresholds: { 100: true }`, requiring 100% coverage across all metrics on every test run.
- **Dependabot** keeps GitHub Actions and npm dependencies up to date automatically via `.github/dependabot.yaml`.

## Running TypeScript

Use `pnpm jiti` to execute any TypeScript file directly without compiling:

```sh
pnpm jiti <file> [args]
```

## Testing

```sh
pnpm vitest run             # Run all tests
pnpm vitest run <file>      # Run a single test file
```

Coverage is always enabled and computed for all files imported during the test run. Running a single test file may fail the 100% threshold if it imports a source file that another test is responsible for fully covering — use the full suite for accurate results.

## Checking and Fixing

Use Lefthook to run the same steps as the pre-commit hook:

```sh
lefthook run pre-commit              # staged files only (default)
lefthook run pre-commit --all-files  # all files — matches what CI runs
```

This installs dependencies, type-checks, fixes formatting, and fixes lint — in that order, stopping on the first failure. If any file changes during the run, it also fails and shows a diff of what changed — re-stage the changed files and retry.

Individual commands (manual fallback if needed): `pnpm tsc`, `pnpm prettier --write .`, `pnpm eslint --fix`.

## Building and Packaging

Use `pnpm pack` to build and package the library into a tarball (e.g. for publishing to npm). The `prepack` script runs `tsc -p tsconfig.build.json` automatically before packing.

## CI

CI runs on push to `main`, pull requests, and manual dispatch. It runs the pre-commit hook on all files, then the full test suite, then `pnpm pack`. See `.github/workflows/ci.yaml` for full details.
