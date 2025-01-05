# SoarDash

(isn't this a cool name? 😉)
A modern dashboard application for financial management and transaction tracking. Built with Next.js 14 and TypeScript, featuring a clean, responsive design and real-time data visualization.

## Tech Stack

### Core

- **Next.js 14**: Leveraging the App Router for server components and streaming
- **React 18**: Using server components and Suspense for better loading states
- **TypeScript**: For type safety and better developer experience

### UI & Styling

- **Tailwind CSS**: For utility-first styling and responsive design
- **shadcn/ui**: For consistent, accessible UI components
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: For dynamic class composition

### Data Management

- **lowdb**: Lightweight JSON database for demo purposes
- **React Suspense**: For component-level loading states
- **Server Components**: For efficient data fetching and rendering

### Development & Quality Tools

- **TypeScript**: Strict type checking enabled
- **Prettier**: Enforcing consistent code formatting across the project
- **ESLint**: Configured with custom rules for consistent code style and catching potential errors
- **Husky**: Pre-commit hooks for code quality checks
- **lint-staged**: Running linters on staged files only

## Code Quality & Standards

### Linting & Formatting

- Comprehensive ESLint configuration with:
  - React hooks rules
  - TypeScript-specific rules
  - Import sorting
  - Accessibility checks
- Prettier configuration for consistent code style
- Automated formatting on save and pre-commit

### Git Workflow

- Husky pre-commit hooks ensure:
  - Proper code formatting

### Type Safety

- Strict TypeScript configuration
- Comprehensive type definitions
- No implicit any
- Strict null checks

## Running the project

1. **Installation**

   ```bash
   npm install
   ```

2. **Development**

   ```bash
   npm run dev
   ```

3. **Build**
   ```bash
   npm run build
   ```

## Directory Structure

```
src/
├── app/                          # Next.js app directory
│   ├── api/                     # API routes
│   │   ├── cards/
│   │   │   └── route.ts        # Cards API endpoint
│   │   └── transactions/
│   │       └── recent/
│   │           └── route.ts    # Recent transactions endpoint
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Dashboard page
│   └── loading.tsx             # Global loading state
│
├── components/
│   ├── dashboard/              # Dashboard-specific components
│   │   ├── cards-section.tsx   # Cards list container
│   │   ├── credit-card.tsx     # Credit card component
│   │   ├── transaction-item.tsx # Individual transaction
│   │   ├── transactions-section.tsx # Transactions list container
│   │   ├── card-skeleton.tsx   # Card loading state
│   │   └── transaction-skeleton.tsx # Transaction loading state
│   └── ui/                     # Reusable UI components
│       ├── card.tsx           # Base card component
│       └── skeleton.tsx       # Base skeleton component
│
├── db/                         # Database configuration
│   ├── index.ts               # Database operations
│   ├── schema.ts              # Database schema types
│   └── data.json              # Mock data store
│
├── lib/                        # Utilities and types
│   ├── utils.ts               # Utility functions
│   ├── helpers.ts             # API helper functions
│   ├── card.d.ts             # Card type definitions
│   └── transaction.d.ts      # Transaction type definitions
│
└── styles/                     # Global styles
    └── globals.css            # Global CSS and Tailwind imports
```

## Choices made

- Used shadcn/ui for the UI components for quickly getting the UI up and running.
- Used tailwind for the exact same reason, instead of writing custom css from scratch.
- Use AI code generations wherever I could (but thoroughly reviewed them)

## Missing pieces

- There are a lot I haven't completed due to unavailability of time.
- The one that I would have liked to add, is tests.
- Also, hey? are you expecting to get the entire MVP built by me in couple of days? 👀 😂
