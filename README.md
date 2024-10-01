# Karbi

A personal portfolio website built with Next.js, Tailwind CSS, and TypeScript, showcasing my work and skills.

<p>
    <img src="./public/img/karbi_demo.gif"/>
</p>

## Motivation

I built my personal portfolio website to showcase my work and skills while learning new technologies like Next.js, Tailwind CSS, and TypeScript. I also wanted to try out component libraries like Shadcn and Magic UI to create a sleek, modern design.

### Goal

The goal of this project was to create a dynamic portfolio website that automatically fetches my pinned GitHub projects, making it easier to keep my featured work up to date. I wanted a fast, responsive, and accessible site with a clean, modern design that highlights my skills and provides a seamless user experience.

## Features

- [Next.js](https://nextjs.org/) App Router
- React Server Components (RSCs)
- [shadcn/ui](https://ui.shadcn.com/)
  - Styling with [Tailwind CSS](https://tailwindcss.com/)
  - [Radix UI](https://www.radix-ui.com/) for headless component primitives
  - Icons from [Lucide](https://lucide.dev/icons/) and [Radix Icons](https://www.radix-ui.com/icons)
  - [Magic UI](https://magicui.design/) for animated components
- [Get Pinned Repos](https://www.npmjs.com/package/get-pinned-repos) to fetch pinned GitHub repositories easily

## 🚀 Getting Started

### Clone the repo

```bash
git clone https://github.com/krtcrvy/karbi.git
cd karbi
```

### Install dependencies:

```bash
pnpm install
```

### Copy the `.env.example` file to `.env.local` and add your GitHub credentials and App URL:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
GH_ACCESS_TOKEN=your-access-token
GH_USERNAME=your-username
```

### Run the development server:

```bash
pnpm run dev
```

The site should now be running at [http://localhost:3000](http://localhost:3000).

## ⚙️ Configuration

### Site Configuration

You can customize the site by editing the `siteConfig.ts` file in the `config` directory. Here you can update the site title, description, social links, and more.

```ts
export const siteConfig = {
  name: "your-webiste-name",
  author: "your-name",
  description: "your-website-description",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/logo.png`,
  links: {
    github: "your-github-url",
    facebook: "your-facebook-url",
    twitter: "your-twitter-url",
    linkedin: "your-linkedin-url",
    email: "your-email",
    resume: "your-resume-url",
  },
};
```

## 🤝 Contributing

### Submit a pull request

If you'd like to contribute, please fork the repository and open a pull request to the `main` branch.
