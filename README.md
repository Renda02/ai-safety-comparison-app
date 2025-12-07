# AI safety philosophies comparison app

A Next.js web application that compares AI safety philosophies and approaches across leading AI companies. This app provides a visual comparison of how different companies prioritize safety, transparency, and risk management in their AI development.

## Features

- **Company Comparison**: Compare safety philosophies between any two AI companies
- **Detailed Analysis**: View core philosophy, risk prioritization, safety frameworks, technical methods, and trade-offs
- **10 Companies Supported**: 
  - Anthropic's Claude
  - OpenAI's GPT-4
  - Google's Gemini
  - Meta's Llama
  - Mistral AI
  - Microsoft's Copilot
  - xAI's Grok
  - Cohere
  - AI21 Labs
  - Inflection AI (Pi)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **pnpm** package manager

You can check your Node.js version by running:
```bash
node --version
```

## Getting started

### 1. Navigate to the frontend directory

```bash
cd ai-safety-frontend
```

### 2. Install dependencies

Install all required packages:

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

### 3. Run the development server

Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

or

```bash
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

Open your browser and navigate to that URL to see the application.

### 4. Build for production (optional)

To create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Project structure

```
ai-safety-comparison-app/
├── ai-safety-frontend/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Main page component
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── company-selector.tsx
│   │   ├── comparison-table.tsx
│   │   ├── overall-rating.tsx
│   │   ├── references.tsx
│   │   ├── footer.tsx
│   │   └── ui/                # UI components (buttons, cards, etc.)
│   ├── lib/                   # Utility functions and data
│   │   ├── company-data.ts    # Company data and metrics
│   │   ├── update-scores.ts   # Score calculation utilities
│   │   └── utils.ts           # Helper functions
│   ├── public/                # Static assets
│   ├── package.json           # Dependencies and scripts
│   └── tsconfig.json          # TypeScript configuration
```

## Available scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm start` - Start the production server (after building)
- `npm run lint` - Run ESLint to check code quality

## Technology stack

- **Framework**: Next.js 16.0.7
- **React**: 19.2.0
- **TypeScript**: ^5
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI
- **Icons**: Lucide React

## Troubleshooting

### Port already in use

If port 3000 is already in use, you can:

1. Stop the process using the port:
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

2. Or run the dev server on a different port:
   ```bash
   npm run dev -- -p 3001
   ```

### Installation issues

If you encounter issues during installation:

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## Notes

- The metrics and scores in this app are estimates based on publicly available information and are not from official company data sources.
- All scores are calculated using weighted formulas based on individual metrics.
- The app is designed for illustrative and educational purposes.

## License

This project is private and not licensed for public use.

