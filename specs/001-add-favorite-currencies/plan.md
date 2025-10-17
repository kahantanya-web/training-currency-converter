# Implementation Plan: Favorite Currencies

**Branch**: `spec-kit` | **Date**: 2025-10-17 | **Spec**: C:\Users\t.kakhanovich\training\training-currency-converter\specs\001-add-favorite-currencies\spec.md

## Summary

Add a small, client-only "Favorite Currencies" feature that allows users to
save currency codes locally and access them quickly from the currency
selector. Persistence is via browser `localStorage` under a namespaced key
(`tcc.favorites`). The feature must be resilient to malformed storage, work
when localStorage is unavailable (fallback to in-memory), and respond to
cross-tab updates via the `storage` event.

## Technical Context

Language/Version: TypeScript (Next.js app)  
Primary Dependencies: React, Next.js, Jest, Testing Library  
Storage: client-side `localStorage` (fallback in-memory)  
Testing: Jest + React Testing Library  
Target Platform: web (modern evergreen browsers)  
Performance Goals: selector rendering p95 < 200ms for common cases  
Constraints: no server-side persistence; no PII stored

Open questions: NONE — feature request included localStorage requirement.

## Constitution Check

Gates derived from `.specify/memory/constitution.md`:

- Code quality: ESLint + TypeScript typecheck must pass in CI.
- Tests: Unit tests for favorites logic; integration/UI tests for add/remove
  and persistence.
- Coverage: keep or improve component coverage; target +2% in affected
  areas.
- Performance: lightweight smoke test for selector render time when
  favorites are present.

Document test file locations in the plan (see Tasks).

## Project Structure (feature)

specs/001-add-favorite-currencies/

- plan.md # this file
- research.md
- spec.md
- data-model.md
- quickstart.md
- contracts/
- checklists/requirements.md

## Phase 0: Outline & Research

This feature has no unresolved technical unknowns. Research tasks are small
and focused on best practices for cross-tab storage handling and localStorage
error cases.

Research outputs: see `research.md`.

## Phase 1: Design & Contracts

Deliverables:

- `data-model.md` — entity shape and validation rules for favorites.
- `contracts/` — not applicable for server APIs; include a note that this is
  client-only.
- `quickstart.md` — how to use the feature from a developer perspective.

## Phase 2: Tasks (high level)

- Setup: add unit/integration test files scaffold.
- Implement favorites utility (add/remove/get/subscribe) with TS types.
- Integrate into `CurrencySelect` UI: show favorites at top, add/remove
  affordances.
- Edge-case handling: invalid JSON, storage disabled, cross-tab sync.
- Tests: unit tests for utils; integration tests for UI flows; coverage
  assertions.
- CI: ensure tests run and coverage check added to pipeline (or workflow)

## Phase 3: Polish & Release

- Accessibility checks for favorites UI (keyboard, screen reader labels).
- Performance smoke test and minor optimizations if needed.
- Update docs and changelog.

## Artifacts to create now

- C:\Users\t.kakhanovich\training\training-currency-converter\specs\001-add-favorite-currencies\research.md
- C:\Users\t.kakhanovich\training\training-currency-converter\specs\001-add-favorite-currencies\data-model.md
- C:\Users\t.kakhanovich\training\training-currency-converter\specs\001-add-favorite-currencies\quickstart.md
- C:\Users\t.kakhanovich\training\training-currency-converter\specs\001-add-favorite-currencies\contracts\README.md
