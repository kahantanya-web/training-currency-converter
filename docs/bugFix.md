# Bug Fix: Prevent Same Currency Selection

Objective

- Fix UX bug where users can select the same currency in both "From" and "To" selectors.
- When a duplicate selection occurs, automatically swap the values to keep currencies different.
- Add tests for the new behavior and run full test suite.

Problem

- Selecting identical currencies (e.g., USD → USD) makes conversion meaningless and confuses users.

Expected Behavior

- If user selects currency X in the "From" dropdown while "To" is X → swap values so currencies remain different.
- If user selects currency X in the "To" dropdown while "From" is X → swap values similarly.
- Preserve other app state (amount, history, rates) and keep UX smooth.

Requirements

- Modify hooks/useConverter.ts to implement selection logic that prevents identical selections.
- When selecting a currency equal to the opposite side, perform a swap instead of allowing duplicates.
- Add unit tests covering swap behavior and non-regression tests for existing functionality.
- Run full test suite and ensure no regressions.
