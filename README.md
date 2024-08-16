This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Storybook

This project uses Storybook for developing and testing individual components in isolation.

To run Storybook, use the following command:


```
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```

## Component Architecture

### Atomic Design Pattern

The project follows the Atomic Design Pattern for component organization. Components are structured into atoms, molecules, and organisms to create a scalable and maintainable design system:

- Atoms: Basic building blocks (e.g., buttons, inputs).
- Molecules: Combinations of atoms (e.g., input fields with labels).
- Organisms: Complex components made of molecules and/or atoms (e.g., forms, navigation bars).
- Templates: The wrapper of component layouts

## React Query

React Query is used for data fetching and state management in this project. It simplifies the process of managing server state and synchronizing it with the UI.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
