# Feature Specification: Favorite Currencies

**Feature Branch**: `spec-kit`  
**Created**: 2025-10-17  
**Status**: Draft  
**Input**: User description: "Add a \"Favorite Currencies\" feature with localStorage persistence"

## User Scenarios & Testing (mandatory)

### User Story 1 - Add / Save Favorite Currency (Priority: P1)

As a user, I want to save a currency as a favorite from the currency selection UI so
I can quickly pick it in future conversions.

Why this priority: saving favorites materially reduces selection friction for
frequent currency pairs and improves primary conversion task speed.

Independent Test: unit tests for the favorite management logic and an
integration/UI test that exercises marking a currency as favorite and seeing
it appear in the favorites list.

Acceptance Scenarios:

1. Given the app has no favorites, when the user marks EUR as favorite, then
   EUR appears in the favorites list and is persisted to localStorage.
2. Given EUR is already a favorite, when the user marks EUR again, then the
   favorites list remains unchanged (no duplicates).

---

### User Story 2 - Remove Favorite (Priority: P2)

As a user, I want to remove a currency from my favorites so I can keep the
list relevant.

Independent Test: unit tests for removal logic and an integration/UI test for
removal flow and persistence check.

Acceptance Scenarios:

1. Given EUR is a favorite, when the user removes EUR, then EUR no longer
   appears in favorites and localStorage is updated accordingly.

---

### User Story 3 - Quick Access & UI Integration (Priority: P3)

As a user, I want favorites displayed prominently in the currency selector so
I can pick them without scrolling long lists.

Independent Test: UI snapshot / integration test that confirms favorites are
rendered above the full list and ordering is preserved across reloads.

Acceptance Scenarios:

1. Given favorites exist, when the currency selector opens, then favorites are
   shown at the top in the order they were added (most recent first is OK if
   specified below).

---

### Edge Cases

- The localStorage entry is invalid JSON (malformed): the app must ignore the
  value, reset favorites to empty, and not crash the UI.  
- Storage quota exceeded or localStorage disabled: fall back to in-memory
  favorites for the session and surface a non-blocking warning to the user
  (do not block conversions).  
- Multiple tabs: if favorites are changed in another tab, the UI should react
  to the `storage` event and update displayed favorites.

## Requirements (mandatory)

### Constitution Check (required)

- Code Quality: ESLint and TypeScript typecheck MUST pass. Relevant
  config files: `/.eslintrc.js`, `tsconfig.json`.  
- Tests: Required tests:  
  - Unit: `components/__tests__/favorites.test.tsx` (favorites reducer/logic).  
  - Integration/UI: `components/__tests__/favorites.integration.test.tsx` (user flow: add/remove favorites and persistence).  
- Coverage: expected +2% coverage in component area (overall repo target 80%).  
- Performance: negligible performance impact; add a lightweight smoke test
  ensuring currency selector open time remains within acceptable limits (UI
  render p95 target < 200ms in integration harness for selector rendering).

### Functional Requirements

- FR-001: The system MUST allow a user to add a currency to a local favorites
  list from the currency selection UI.  
- FR-002: The system MUST allow a user to remove a currency from the local
  favorites list.  
- FR-003: The system MUST persist the favorites list to browser
  `localStorage` under a namespaced key (e.g., `tcc.favorites`) and restore it
  on app load.  
- FR-004: On load, if the persisted favorites is invalid or missing, the
  system MUST initialize with an empty favorites list and NOT throw errors.  
- FR-005: The favorites list MUST be displayed prominently in the currency
  selector UI, with a clear affordance to add/remove favorites.  
- FR-006: The system MUST listen for cross-tab `storage` events and update
  the UI when favorites change in another tab.  

Assumptions:

- Users are anonymous (no server-side persistence required).  
- LocalStorage is acceptable for this feature; no PII is stored.  
- The UI has a currency selector component where favorites can be integrated.

### Key Entities

- Favorites list: ordered array of currency codes (ISO 4217, e.g., "USD",
  "EUR").  
- Storage key: string (e.g., `tcc.favorites`) holding JSON array of codes.  

## Success Criteria (mandatory)

### Measurable Outcomes

- SC-001: Users can add a currency to favorites and select it within 2 clicks
  in 95% of trials (measured in manual acceptance testing).  
- SC-002: Favorites persist across reloads: after adding a favorite and
  reloading the page, the favorite appears in the list in 100% of trials.  
- SC-003: When favorites are updated in another tab, the receiving tab shows
  the update within 2 seconds in 95% of trials (storage event handling).  
- SC-004: No regressions in existing tests; component coverage for the
  currency selector/favorites area remains >= the prior baseline (expect
  +2% delta target).

