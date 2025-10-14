# Currency Converter Bug Fixing Prompt

This prompt outlines the systematic approach to fixing bugs in the Currency Converter application, ensuring proper diagnosis, testing, and validation.

## Bug Fixing Workflow

### 1. Understand the Bug

- **Reproduce the issue** using the steps provided in the bug report
- **Identify which component or hook** is likely involved (AmountInput, CurrencySelect, SwapButton, ConversionResult, useExchangeRates, or useConverter)
- **Check URL parameters** as most state is stored in URL - verify if URL state is being properly updated
- **Console errors** - check browser console and server logs for clues

### 2. Analyze the Code

- **Trace the data flow** from API → hooks → components
- **Check URL sync logic** in the useConverter hook
- **Review API fallback chain** in [`app/api/rates/route.ts`](app/api/rates/route.ts) for API-related issues
- **Verify type definitions** in /types/ folder match implementation

### 3. Fix Implementation

- **Maintain patterns** - follow existing patterns for URL state, component structure, and hook composition
- **Preserve type safety** - ensure TypeScript types are properly maintained
- **Keep components focused** - don't add mixed responsibilities
- **Maintain API fallback strategy** for reliability

### 4. Test Your Fix

- **Run existing tests** first to ensure baseline functionality:
  ```bash
  npm run test
  ```
- **Update affected tests** to reflect your changes while maintaining coverage
- **Add new tests** for specific edge cases that caused the bug

- **Verify tests pass** with updated implementation:
  ```bash
  npm run test:watch -- --testPathPattern=ComponentName
  ```

### 5. Validate UI

- **Start development server**:

  ```bash
  npm run dev
  ```

- **Test in browser** at http://localhost:3000

- **Check responsive layout** on mobile and desktop views

- **Verify currency conversion** works correctly with different inputs

- **Test error states** by forcing API failures or invalid inputs

- **Validate URL state** by refreshing the page with URL parameters

## Common Bug Patterns to Check

1. **Conversion calculation errors** - Check decimal handling and currency rate application
2. **URL sync issues** - Verify URL parameters are updated and read correctly
3. **API fallback failures** - Ensure multiple API sources are properly tried
4. **Input validation** - Confirm amount validation provides proper user feedback
5. **Component rendering issues** - Check conditional rendering logic in components

For each bug fix, provide a concise explanation of:

1. Root cause
2. Implementation changes
3. Test modifications
4. UI validation performed
