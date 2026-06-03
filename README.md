# Node.js Starter

A minimal [Node.js](https://nodejs.org/en) project template written in [TypeScript](https://www.typescriptlang.org/), with formatting, linting, testing, and CI/CD ready to go.

## What's Included

- **TypeScript** library with [ESM](https://nodejs.org/api/esm.html) support and a CLI entry point using [yargs](https://yargs.js.org/)
- **[pnpm](https://pnpm.io/)** as the package manager
- **Formatting** with [Prettier](https://prettier.io/) and **linting** with [ESLint](https://eslint.org/)
- **Testing** with [Vitest](https://vitest.dev/) — 100% code coverage required
- **Pre-commit hooks** with [Lefthook](https://lefthook.dev/) — auto-formats and lints before each commit
- **Dependabot** — keeps GitHub Actions and npm dependencies up to date automatically
- **CI workflow** — validates the pre-commit hook on every pull request and push to `main`

## Getting Started

1. [Create a new repository](https://github.com/new?template_name=nodejs-starter&template_owner=threeal) from this template, or clone it directly.
2. Install [pnpm](https://pnpm.io/installation) and run `pnpm install` to set up project dependencies.
3. Install [Lefthook](https://lefthook.dev/installation/) and run `lefthook install` to activate the pre-commit hook.
4. Replace the [`LICENSE`](./LICENSE) file with your preferred license, or keep it to keep the project [unlicensed](https://unlicense.org/).
5. Modify the template files to fit your project.

## Customizing

Each file is a starting point — modify it to fit your needs:

- `src/fibonacci.ts` — replace the placeholder library with your own implementation
- `src/index.ts` — update the public API exports to match your library
- `src/cli/index.ts` — replace the placeholder CLI, or remove it along with the `bin` entry in `package.json` if not needed
- `src/cli/commands/` — add or replace yargs command modules; each command is a `createXxxCommand()` factory for testability
- `package.json` — update project name, description, version, and other metadata
- `.prettierrc.json` — adjust formatting options
- `eslint.config.ts` — adjust linting rules
- `vitest.config.ts` — adjust test configuration and coverage thresholds
- `lefthook.yaml` — add more pre-commit checks or other Git hooks
- `.github/workflows/ci.yaml` — extend or replace the CI workflow
- `.github/dependabot.yaml` — adjust update frequency or add more package ecosystems
- `CLAUDE.md` — replace with guidance for your project's structure, tools, and development workflow (for Claude Code)
