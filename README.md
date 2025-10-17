# Currency Converter

A modern, responsive currency converter application built with Next.js, TypeScript, and Tailwind CSS. Convert between 10 popular currencies with real-time exchange rates.

## Features

### Core Functionality

- **Real-time Exchange Rates**: Fetches rates from multiple API sources with automatic fallback
- **10 Popular Currencies**: USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, INR, MXN
- **Automatic Conversion**: No need to click convert - updates happen automatically
- **Currency Swap**: Quickly swap source and target currencies
- **URL Persistence**: Share conversions via URL parameters

### Advanced Features

- **Conversion History**: Tracks your last 10 conversions
- **History Management**: View, reload, or clear your conversion history
- **Input Validation**: Real-time validation with helpful error messages
- **Responsive Design**: Works perfectly on mobile and desktop devices
- **Error Handling**: Graceful fallback when API services are unavailable
- **Caching**: 1-hour cache for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API Sources**:
  - exchangerate.host
  - exchangerate-api.com
  - open.er-api.com

## Training Challenges

This repository is designed as a hands-on learning platform for AI-assisted development. Each branch contains a different challenge that teaches specific skills for working effectively with AI coding assistants like GitHub Copilot.

### Available Challenges

1. **`main`** - Complete Project Setup from Scratch
2. **`customisation`** - Project Customization
3. **`unit-test`** - Unit Test Writing
4. **`bug-fix`** - Bug Fixing
5. **`feature`** - Feature Requirements Preparation
6. **`agent-issue`** - Creating GitHub Issues with AI
7. **`spec-kit`** - Spec-Driven Development with GitHub's Spec-Kit

### How to Start a Challenge

#### Step 1: Choose Your Challenge

Review the available challenges in `docs/Challenges.md` to understand what each one teaches.

```bash
# View the challenges documentation
cat docs/Challenges.md
```

#### Step 2: Read the Challenge Documentation

Each challenge has detailed documentation in the `docs/` folder:

```bash
# For customisation challenge
cat docs/customisation.md

# For unit-test challenge
cat docs/unitTest.md

# For bug-fix challenge
cat docs/bugFix.md

# For feature challenge
cat docs/feature.md

# For agent-issue challenge
cat docs/agentIssue.md

# For spec-kit challenge
cat docs/specKit.md
```

#### Step 3: Follow the Challenge Instructions

Each challenge documentation includes:

- **Objective**: What you'll learn
- **Skills Practiced**: Specific skills covered
- **Step-by-step Instructions**: How to complete the challenge
- **Example Prompts**: Sample AI prompts to use
- **Expected Outcomes**: What success looks like

#### Step 4: Practice with AI Assistants

Use AI assistants (GitHub Copilot, Claude, ChatGPT, etc.) to:

- Generate code based on requirements
- Write tests for existing components
- Debug issues and fix bugs
- Create specifications and documentation
- Implement new features

#### Step 5: Compare Your Solution with the Challenge Branch

After completing the challenge, compare your work with the reference solution:

```bash
# View all available branches
git branch -a

# Switch to the challenge branch to see the reference solution
git checkout <challenge-branch-name>

# Example: Check the customisation challenge solution
git checkout customisation

# Compare specific files with your solution
git diff main <challenge-branch-name> -- <file-path>

# Return to main branch
git checkout main
```

Each challenge branch contains the completed solution so you can:

- Verify your implementation is correct
- Learn from alternative approaches
- Understand best practices
- Check if you missed any requirements

**Important Note on AI Variability:**

Your solution **will not be 100% identical** to the reference solution, and **this is completely normal**. AI assistants (like GitHub Copilot, Claude, ChatGPT) can produce different but equally valid results because:

- Different AI models have different approaches to problem-solving
- The same AI model can generate different code on different runs
- There are often multiple correct ways to solve the same problem

**What matters:**

- ✅ Your code achieves the same functional requirements
- ✅ Tests pass and coverage is adequate
- ✅ Code follows project conventions and quality standards
- ✅ The implementation is maintainable and well-structured

**Focus on learning** from the differences rather than matching the reference exactly. Understanding _why_ the AI chose different approaches helps you become a better AI-assisted developer.

### Recommended Learning Path

**For Beginners:**

1. Start with **`customisation`** to set up your environment
2. Try **`unit-test`** to practice testing
3. Work on **`bug-fix`** to learn debugging
4. Practice **`feature`** to master requirements
5. Try **`agent-issue`** for GitHub workflow
6. Master **`spec-kit`** for advanced spec-driven development

**For Experienced Developers:**

Jump directly to any challenge based on the skills you want to practice.

### Challenge Tips

**Do:**

- ✅ Read the full challenge documentation before starting
- ✅ Experiment with different AI prompts
- ✅ Review and understand AI-generated code
- ✅ Run tests frequently to validate your work
- ✅ Commit your changes as you progress
- ✅ Compare your solution with the provided examples

**Don't:**

- ❌ Skip the challenge documentation
- ❌ Copy-paste AI output without understanding it
- ❌ Ignore failing tests
- ❌ Rush through challenges without learning
- ❌ Skip the verification steps

### Getting Help

If you get stuck on a challenge:

1. Re-read the challenge documentation
2. Review the example prompts and expected outcomes
3. Check the `docs/` folder for additional resources
4. Look at the `VISUAL_GUIDE.md` for UI components
5. Review the `CHANGELOG.md` for version history
6. Open an issue on GitHub for community help

### Switching Between Challenges

You can switch between challenges at any time:

```bash
# Save your current work
git add .
git commit -m "WIP: Working on <challenge-name>"

# Switch to another challenge
git checkout <another-challenge-branch>

# Return to your previous challenge
git checkout <previous-challenge-branch>
```

### After Completing a Challenge

1. **Verify Your Solution**: Run all tests and ensure they pass
2. **Review Your Code**: Compare with examples and best practices
3. **Document Your Learning**: Note what you learned
4. **Move to Next Challenge**: Continue your learning journey

For complete details on all challenges, see **[docs/Challenges.md](docs/Challenges.md)**.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd training-currency-converter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
training-currency-converter/
├── app/
│   ├── api/
│   │   └── rates/
│   │       └── route.ts          # Exchange rates API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main application page
├── types/
│   └── index.ts                  # TypeScript type definitions
├── utils/
│   ├── currency.ts               # Currency conversion utilities
│   └── storage.ts                # LocalStorage utilities
├── public/                       # Static assets
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies
├── README.md                     # This file
└── CHANGELOG.md                  # Version history
```

## Usage

### Basic Conversion

1. Enter an amount in the input field
2. Select the source currency from the first dropdown
3. Select the target currency from the second dropdown
4. The conversion happens automatically

### Swap Currencies

Click the swap button (⇄) between the currency dropdowns to quickly exchange the source and target currencies.

### View History

1. Click the "Show" button in the History section
2. Click on any history item to reload that conversion
3. Use "Clear History" to remove all saved conversions

### Share Conversions

The URL updates automatically with conversion parameters. Copy and share the URL to share a specific conversion:

```
http://localhost:3000?amount=100&from=USD&to=EUR
```

## API Endpoints

### GET /api/rates

Fetches current exchange rates with USD as the base currency.

**Response:**

```json
{
  "success": true,
  "data": {
    "base": "USD",
    "rates": {
      "EUR": 0.85,
      "GBP": 0.73,
      ...
    },
    "timestamp": 1697184000000
  }
}
```

**Caching:** 1 hour (3600 seconds)

## Error Handling

The application handles various error scenarios:

- **Invalid Amount**: Shows validation error under the input field
- **API Failure**: Automatically tries fallback sources
- **Network Timeout**: 10-second timeout with error message
- **SSL Certificate Issues**: Handled with custom HTTPS agent

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **First Load**: ~2-3 seconds (includes API fetch)
- **Subsequent Loads**: Instant (1-hour cache)
- **Bundle Size**: Optimized for production
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices)

## Troubleshooting

### API Not Loading

If exchange rates fail to load:

1. Check your internet connection
2. The app automatically tries 3 different API sources
3. Wait a moment and try again
4. Check browser console for detailed error messages

### History Not Saving

If conversion history doesn't persist:

1. Ensure localStorage is enabled in your browser
2. Check if you're in private/incognito mode
3. Clear browser cache and try again

## AI-Assisted Development Workflow

When working with AI assistants on this project:

1. Start each session by asking the AI to create a to-do list
2. Maintain `copilot_session.log` for long operations

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Exchange rate data provided by:
  - [exchangerate.host](https://exchangerate.host)
  - [exchangerate-api.com](https://exchangerate-api.com)
  - [open.er-api.com](https://open.er-api.com)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Version**: 1.0.0  
**Last Updated**: October 2025
