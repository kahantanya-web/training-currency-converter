Currency Converter Bug: Same Currency Selection
Problem Description: There's a critical bug in the currency converter application. Currently, users can select the same currency in both the "From" and "To" dropdowns (e.g., USD → USD), which makes conversion meaningless and creates confusion.
Expected Behavior: When a user selects a currency in one dropdown that matches the other dropdown's current selection, the application should prevent this duplicate selection by automatically changing one of the values to maintain different currencies.
Requirements:
Modify the useConverter.ts hook to implement selection logic that prevents the same currency from being selected in both dropdowns
When a user tries to select currency X in the "From" dropdown while currency X is already selected in the "To" dropdown, swap the values
Similarly handle the reverse case (selecting in "To" dropdown)
Ensure a smooth user experience with intuitive behavior
Please implement this fix while maintaining all existing functionality. Also add specific tests for the new bug fix functionality. Run the full test suite to make sure we haven't broken anything else.
