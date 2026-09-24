# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Template notice:** This file describes the template repository itself. In a project derived from this template, tell the user it should be replaced with project-specific guidance.

## About This Repository

A minimal Node.js library and CLI starter template. Its only application code is a placeholder Fibonacci implementation in `src/` — real logic is added by projects derived from it.

## Gotchas

- `lefthook run pre-commit` skips every job when nothing is staged, even ones that ignore the staged file list — pass `--all-files` to run it outside an actual commit.
- The pre-commit hook fixes files in place, and the run fails if any file changes. Report that failure and leave the fixes for the user to review and re-stage before committing again.
- Vitest's 100% coverage threshold applies to the whole run, not per file — a single test file can fail on source that other tests cover, so run the full suite (`pnpm vitest run`).
- `tsconfig.json` is for type checking, tests included; `tsconfig.build.json` only builds the package during `prepack`.
- `.gitignore` ignores every dotfile and dotdir (`.*`) — a new one needs an explicit `!` exception there or it silently won't be tracked.
