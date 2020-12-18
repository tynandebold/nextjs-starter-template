# Next.js Boilerplate

A developer-friendly Next.js app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting: [ESLint](https://eslint.org/)
- Formatting: [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on commit using [`husky`](https://github.com/typicode/husky)
- Testing: [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)

## Scripts

| Command                   | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| `npm run build`           | Create an optimized production build                              |
| `npm run dev`             | Start a new local development server on [http://localhost:3000]() |
| `npm run storybook`       | Start a new Storybook server on [http://localhost:7070]()         |
| `npm run storybook:build` | Build Storybook to static HTML                                    |
| `npm run test`            | Run tests using Jest                                              |
| `npm run test:update`     | Run tests and update snapshots, if necessary, using Jest          |
| `npm run test:watch`      | Run tests in watch mode using Jest                                |
| `npm run test-all`        | Run lint, type check, and tests using Jest                        |

## Storybook

### Run it

```bash
npm run storybook
```

### Build it

```bash
npm run build-storybook
```

If desired, Storybook can be [built and published](https://storybook.js.org/docs/react/workflows/publish-storybook) as a static web application
