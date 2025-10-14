Create unit testfor ConversionHistory Component
File to test: ConversionHistory.tsx
Create test file: components/ConversionHistory.test.tsx

Testing Stack
Library: @testing-library/react
Assertion: @testing-library/jest-dom
Runner: Jest (already configured in the project)
Project Testing Rules
Import pattern: Follow existing test structure from AmountInput.test.tsx or ConverterForm.test.tsx
Test organization: Use describe blocks to group related tests
Mock callbacks: Create jest.fn() mocks and clear them in beforeEach
Coverage target: 100% statements, branches, functions, and lines
Queries: Use screen.getByText() for elements that must exist, screen.queryByText() for conditional elements
User interactions: Use fireEvent.click() from @testing-library/react
Assertions: Use .toBeInTheDocument(), .toHaveBeenCalledWith(), .not.toBeInTheDocument()
What to Test
All conditional renders (Clear button visibility, empty state, history list visibility)
All button clicks and callbacks (onToggle, onClear, onLoadConversion)
Toggle button text based on showHistory prop
History count display
All conversion data rendering (amount, currencies, rate, timestamp)
Edge cases: empty history, multiple items
Success Criteria
All tests pass
Coverage report shows 100% for ConversionHistory.tsx
Follow same code style as existing test files in the project
