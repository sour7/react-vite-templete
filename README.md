# Demo React App

This is a modern React application built with Vite, Mantine UI, and Storybook for UI development. It includes TypeScript support, linting with ESLint, and formatting with Prettier.

## Features

- **React 19** - The latest version of React
- **Vite** - Fast build and development server
- **Mantine UI** - Component library for styling and hooks
- **Storybook** - Isolated UI component development
- **ESLint & Prettier** - Code linting and formatting
- **TypeScript** - Strongly typed JavaScript
- **PostCSS** - Advanced styling features

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed, then run:

```sh
yarn install
```

## Scripts

### Development

```sh
yarn dev       # Start Vite development server
yarn dev:sb    # Start Storybook on port 6006
```

### Build

```sh
yarn build     # Build the app using Vite and TypeScript
yarn build:sb  # Build Storybook
```

### Lint & Format

```sh
yarn lint      # Run ESLint with auto-fix
yarn pretty    # Format code with Prettier and sort package.json
```

### Preview

```sh
yarn preview   # Preview the production build
```

## Dependencies

- **UI & Styling**: Mantine, Tabler Icons, FontSource Raleway
- **Routing**: React Router
- **Tooling**: Storybook, ESLint, Prettier, TypeScript

## Development Tools

- **Chromatic** - Visual testing for Storybook
- **PostCSS** - CSS pre-processing with Mantine preset

