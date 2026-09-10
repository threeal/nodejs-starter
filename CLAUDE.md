# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Template notice:** This file describes the template repository itself. If working in a project derived from this template, inform the user that this CLAUDE.md still contains template guidance and should be updated with project-specific content.

## About This Repository

Minimal Node.js library + CLI starter, TypeScript targeting Node 24, ESM. `src/` contains a placeholder Fibonacci implementation — replace it with real logic when starting a new project.

## Rules that aren't obvious from the code

- There are two tsconfig files with different jobs — don't assume one:
  - `tsconfig.json` — type checking (`pnpm tsc`)
  - `tsconfig.build.json` — compilation for packaging, run automatically by `prepack`
- Import paths must end in `.js`, even when importing `.ts` source files. Both tsconfig files set `moduleResolution: node16`, which requires this.
- `lefthook run pre-commit` auto-fixes formatting and lint issues, and `fail_on_changes` fails the run if any file changed. If that happens, re-stage the changed files and rerun.
- Vitest's 100% coverage threshold applies to the whole run, not per file. Running a single test file can fail coverage if it imports source another file is responsible for covering — use the full suite for an accurate result.
- Prettier auto-reorders imports (`prettier-plugin-organize-imports`) — reordering on format is expected, not a bug.

## Layout

- `src/cli/commands/` — one file per yargs command, each exporting a `createXxxCommand()` factory that takes injected streams/deps for testability. Follow this shape for new commands.
- `src/cli/index.ts` — CLI entry point, wires commands into yargs.
- `src/index.ts` — library's public API (re-exports).
- `src/*.test.ts` — colocated with the source they test.

## Config map

- Type checking — `tsconfig.json`
- Build for packaging — `tsconfig.build.json`
- Lint — `eslint.config.ts`
- Format — `.prettierrc.json`
- Tests + coverage — `vitest.config.ts`
- Git hooks — `lefthook.yaml`
- CI — `.github/workflows/ci.yaml`
- Dependency updates — `.github/dependabot.yaml`

## Commands

- `lefthook run pre-commit` — lint/format/etc. on staged files (`--all-files` to match CI)
- `pnpm vitest run` — full test suite with coverage
- `pnpm pack` — build and package into a tarball (runs `prepack` → `tsc -p tsconfig.build.json`)
