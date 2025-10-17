# Tasks: Favorite Currencies

**Input**: Design documents from `specs/001-add-favorite-currencies/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure for this feature

- [ ] T001 [P] Create test directory for feature: `components/__tests__/` (if missing)
- [ ] T002 [P] Create unit test scaffold `components/__tests__/favorites.test.tsx`
- [ ] T003 [P] Create integration test scaffold `components/__tests__/favorites.integration.test.tsx`
- [ ] T004 [P] Add feature quickstart to `specs/001-add-favorite-currencies/quickstart.md` (ensure steps & commands are accurate)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core utilities and wiring that MUST be present before user stories

- [ ] T005 Implement favorites utility `src/utils/favorites.ts` (API: add(code), remove(code), list(): string[], subscribe(callback))
- [ ] T006 [US1] Implement storage abstraction inside `src/utils/favorites.ts` with `localStorage` primary and in-memory fallback (persist key: `tcc.favorites`)
- [ ] T007 Implement safe JSON parsing and validation for persisted favorites in `src/utils/favorites.ts` (validate ISO-4217 codes, dedupe, enforce max 20)
- [ ] T008 Implement cross-tab sync: add `window.addEventListener('storage', ...)` handling in `src/utils/favorites.ts` and expose subscription notifications
- [ ] T009 [P] Add unit tests for favorites utility: `components/__tests__/favorites.test.tsx` (add/remove/list/edge cases)

---

## Phase 3: User Story 1 - Add / Save Favorite Currency (Priority: P1) 🎯 MVP

**Goal**: Allow users to mark a currency as favorite and persist it locally.  
**Independent Test**: Unit tests for utility + integration test that marks EUR as favorite and verifies persistence.

- [ ] T010 [US1] Update UI: add favorite affordance (star/button) in `components/CurrencySelect.tsx` next to each currency row
- [ ] T011 [US1] Display favorites at the top of `components/CurrencySelect.tsx` (render favorites list from `src/utils/favorites.ts`)
- [ ] T012 [US1] Wire UI actions to favorites util: call add/remove and reflect UI state in `components/CurrencySelect.tsx`
- [ ] T013 [US1] Add integration test `components/__tests__/favorites.integration.test.tsx` verifying: add favorite -> persisted in localStorage -> visible after reload

---

## Phase 4: User Story 2 - Remove Favorite (Priority: P2)

**Goal**: Provide a clear way to remove currencies from favorites.  
**Independent Test**: Unit tests + integration test for removal flow and persistence.

- [ ] T014 [US2] Add remove affordance (unstar/remove) in `components/CurrencySelect.tsx` for favorites
- [ ] T015 [US2] Wire remove action to favorites util and ensure localStorage updates
- [ ] T016 [US2] Add integration/unit test `components/__tests__/favorites.remove.test.tsx` verifying remove -> not present after reload

---

## Phase 5: User Story 3 - Quick Access & UI Integration (Priority: P3)

**Goal**: Ensure favorites are prominent and ordering is predictable across reloads and tabs.  
**Independent Test**: UI test that favorites render at top and `storage` event updates UI.

- [ ] T017 [US3] Ensure ordering behavior: document and implement ordering (append vs MRU) in `src/utils/favorites.ts` and reflect on UI (`components/CurrencySelect.tsx`)
- [ ] T018 [US3] Add UI tests `components/__tests__/favorites.ui.test.tsx` verifying ordering, rendering, and cross-tab updates (simulate `storage` event)

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility, performance, documentation, and CI updates

- [ ] T019 Accessibility audit for `components/CurrencySelect.tsx` favorites UI (keyboard focus, aria labels) — update `components/CurrencySelect.tsx`
- [ ] T020 Add performance smoke test for selector render (script under `scripts/perf/selector-smoke.js` or `tests/perf/selector-smoke.test.ts`) and add to CI conditional job
- [ ] T021 Update project docs & changelog: `CHANGELOG.md` and `specs/001-add-favorite-currencies/quickstart.md`
- [ ] T022 Update CI workflow to run new integration tests and enforce coverage for components area (edit `.github/workflows/ci.yml`)

---

## Dependencies & Execution Order

- Foundation (T005..T009) MUST complete before User Story implementations (T010..T018).  
- User Story 1 (T010..T013) is the MVP and can be executed after Foundation is ready.  
- User Story 2 and 3 can proceed in parallel with separate reviewers once foundational tasks are complete.

## Parallel opportunities

- T001, T002, T003 (test scaffolding) are parallelizable.  
- T009 (unit tests for utils) can be executed in parallel with T005..T008 where appropriate if tests mock storage.  
- UI implementation tasks for different user stories (T010..T011 vs T014) may be parallel if changes are isolated to `components/CurrencySelect.tsx` with feature-flag branches.

## Implementation Strategy

1. MVP first: complete Phase 2 foundational utilities (T005..T009).  
2. Implement User Story 1 (T010..T013), run tests and validate persistence across reloads.  
3. Implement User Story 2 and 3, run integration tests.  
4. Polish: accessibility, perf, CI updates, docs.
