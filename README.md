# Karbi

Karbi is a personal portfolio web application built with [Next.js](https://nextjs.org), designed to showcase various projects. It leverages modern web technologies and libraries like [shadcn](https://ui.shadcn.com/) and [MagicUI](https://magicui.design/) to provide a seamless and interactive user experience.

## Table of Contents

- [Karbi](#karbi)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Scripts](#scripts)
  - [Dependencies](#dependencies)
  - [Components](#components)
    - [ProjectCard](#projectcard)
    - [Projects](#projects)
  - [API Integration](#api-integration)
  - [Styling](#styling)
  - [Deployment](#deployment)
  - [Learn More](#learn-more)

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/karbi.git
cd karbi
```

Install the dependencies:

```bash
pnpm install
```

Create a [`.env.local`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2F.env.local%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%222326e69d-edf8-406c-b2f9-2230a8a19315%22%5D "/Users/karbi/Documents/GitHub/karbi/.env.local") file based on [`.env.example`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2F.env.example%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%222326e69d-edf8-406c-b2f9-2230a8a19315%22%5D "/Users/karbi/Documents/GitHub/karbi/.env.example") and fill in the necessary environment variables.

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```plaintext
.DS_Store
.env.example
.env.local
.eslintrc.json
.gitignore
.next/
package.json
pnpm-lock.yaml
postcss.config.mjs
public/
README.md
src/
  app/
  components/
  config/
  consts.ts
  context/
  env.mjs
  hooks/
  lib/
  styles/
  types/
tailwind.config.ts
tsconfig.json
```

- **public/**: Static assets like images and HTML files.
- **src/**: Source code for the application.
  - **app/**: Main application files.
  - **components/**: Reusable UI components.
  - **config/**: Configuration files.
  - **consts.ts**: Constants used throughout the application.
  - **context/**: React context providers.
  - **env.mjs**: Environment configuration.
  - **hooks/**: Custom React hooks.
  - **lib/**: Utility functions and libraries.
  - **styles/**: Global styles.
  - **types/**: TypeScript type definitions.

## Scripts

- [`pnpm run dev`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A11%2C%22character%22%3A0%7D%7D%5D%2C%222326e69d-edf8-406c-b2f9-2230a8a19315%22%5D "Go to definition"): Runs the development server.
- `pnpm run build`: Builds the application for production.
- `pnpm run start`: Starts the production server.
- `pnpm run lint`: Lints the codebase.
- `pnpm run biome`: Runs Biome checks.

## Dependencies

Key dependencies used in this project:

- [`next`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A5%2C%22character%22%3A12%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A28%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2Fsrc%2Fcomponents%2Fprojects%2Fproject-card.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A15%2C%22character%22%3A19%7D%7D%5D%2C%222326e69d-edf8-406c-b2f9-2230a8a19315%22%5D "Go to definition"): The React framework for production.
- [`react`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A12%2C%22character%22%3A15%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2Fsrc%2Fcomponents%2Fprojects%2Fproject-card.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A13%2C%22character%22%3A42%7D%7D%5D%2C%222326e69d-edf8-406c-b2f9-2230a8a19315%22%5D "Go to definition"): A JavaScript library for building user interfaces.
- `@radix-ui/react-dialog`: Radix UI components.
- `@t3-oss/env-nextjs`: Environment variable management for Next.js.
- [`autoprefixer`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A19%2C%22character%22%3A5%7D%7D%5D%2C%222326e69d-edf8-406c-b2f9-2230a8a19315%22%5D "Go to definition"): A PostCSS plugin to parse CSS and add vendor prefixes.
- `tailwindcss`: A utility-first CSS framework.

## Components

### ProjectCard

Displays individual project details.

```tsx
import ProjectCard from "@/components/projects/project-card";
```

### Projects

Fetches and displays a list of projects.

```tsx
import Projects from "@/components/projects/projects";
```

## API Integration

The application fetches project data from GitHub using the [`getRepo`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2Fsrc%2Fcomponents%2Fprojects%2Fprojects.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A9%7D%7D%5D%2C%222326e69d-edf8-406c-b2f9-2230a8a19315%22%5D "Go to definition") function located in [`src/lib/api/github`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2Fsrc%2Flib%2Fapi%2Fgithub.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22src%2Flib%2Fapi%2Fgithub%22%2C%222326e69d-edf8-406c-b2f9-2230a8a19315%22%5D "/Users/karbi/Documents/GitHub/karbi/src/lib/api/github.ts").

```tsx
import { getRepo } from "@/lib/api/github";
```

## Styling

The project uses Tailwind CSS for styling. Configuration can be found in [`tailwind.config.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fkarbi%2FDocuments%2FGitHub%2Fkarbi%2Ftailwind.config.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%222326e69d-edf8-406c-b2f9-2230a8a19315%22%5D "/Users/karbi/Documents/GitHub/karbi/tailwind.config.ts").

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - Your feedback and contributions are welcome!
