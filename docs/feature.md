Add "Refresh Rates" Button to Currency. Ask questions to get more details if needs.

<!-- Objective
Add a "Refresh Rates" button to the currency converter application that fetches the latest exchange rates from the API in real time and updates the app with fresh data.
Requirements
Functionality
Real-time API Fetching: Button should trigger a fresh API call to /api/rates endpoint
State Management: Update the exchangeRates state with newly fetched data
Error Handling: Display appropriate error messages if the fetch fails
Automatic Recalculation: After fetching new rates, the conversion should automatically recalculate using the updated rates
User Experience
Visual Feedback:
Show a loading spinner/animation while fetching
Disable the button during fetch to prevent multiple simultaneous requests
Use an animated rotating icon during loading state
Placement: Position the button as an icon-only button in the converter form row, after the second currency selector
Design: Match the existing UI style (similar to SwapButton in size and appearance)
Accessibility: Include aria-label and title attributes for screen readers and tooltips

or
Title: Add icon-only "Refresh Rates" button

Acceptance Criteria:
- Clicking the button calls GET `/api/rates` and updates `exchangeRates` on success.
- Button shows spinner and is disabled during fetch.
- Error shows via `ErrorMessage` and previous rates remain.

Minimal Contract:
- Inputs: user click
- Outputs: `exchangeRates` object { base, rates, timestamp }
- Side-effects: network request to `/api/rates`, update `error` on failure, recalc conversion

Files to change:
- `hooks/useExchangeRates.ts`
- `components/RefreshButton.tsx`
- `components/ConverterForm.tsx`
- `components/index.ts`

Tests to add:
- Hook-level: expose `refreshRates`, check loading & error states
- Component-level: clicking refresh triggers `onRefresh` and loading state
- Integration: clicking refresh updates displayed conversion value
- Error path: API failure shows `ErrorMessage`
 -->
