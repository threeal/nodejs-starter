# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Template notice:** This file describes the template repository itself. If you've created a project from this template, replace this content with guidance specific to your project.

## About This Repository

This is a minimal Node.js library and CLI starter template. The Fibonacci sequence code in `src/` is a placeholder — replace it with your actual library and CLI logic when starting a new project.

## Commands

```sh
pnpm test              # Run all tests
pnpm vitest run <file> # Run a single test file (e.g. src/lib.test.ts)
pnpm vitest            # Run tests in watch mode

pnpm tsc               # Type-check without emitting
pnpm eslint            # Lint
pnpm eslint --fix      # Lint and auto-fix
pnpm prettier --check . # Check formatting
pnpm prettier --write . # Fix formatting

pnpm prepack           # Compile TypeScript to dist/ (tsc -p tsconfig.build.json)
pnpm start             # Run CLI directly via jiti (no compile step needed)
```

## Architecture

This is a minimal Node.js library + CLI starter template written in TypeScript targeting Node 24 (ESM).

- **`src/lib.ts`** — The library's public API (currently a Fibonacci sequence generator as a placeholder example).
- **`src/bin.ts`** — CLI entry point built with CAC that wraps the library.
- **`src/*.test.ts`** — Vitest test files co-located with source.

### Build outputs

TypeScript compiles via `tsconfig.build.json` into `dist/`:

- `dist/lib.js` + `dist/lib.d.ts` — library entry (exported as `"."`)
- `dist/bin.js` — CLI binary (exported as `"./bin"` and registered as the `nodejs-starter` bin)

The development workflow uses **jiti** to run `src/bin.ts` directly without a compile step (`pnpm start`).

### Tooling details

- **ESLint** uses flat config (`eslint.config.ts`) with `typescript-eslint` strict + stylistic type-checked rules.
- **Prettier** uses `prettier-plugin-organize-imports` — import order is auto-managed.
- **Lefthook** is an external tool (not a dev dependency) that manages Git hooks. It must be installed independently and set up with `lefthook install`. Pre-commit hooks run type-check → format → lint with `fail_on_changes: always`, so hooks can auto-fix files but will abort the commit if any file changed, requiring a re-stage. The CI also validates the pre-commit hook by running `lefthook run pre-commit --all-files`.
- **Vitest** requires 100% code coverage (lines, functions, branches, statements) enforced via the `coverage` threshold in `vitest.config.ts`.
