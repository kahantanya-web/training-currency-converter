# Quickstart: Favorite Currencies (Developer)

1. Checkout the `spec-kit` branch and ensure dependencies are installed.
2. Run unit tests locally: `npm test -- components/favorites` (or project
   test runner equivalent).
3. To manually test in browser:
   - Start dev server: `npm run dev`
   - Open the app, open the currency selector, add a favorite, reload and
     verify persistence.
4. To test cross-tab sync: open two tabs, add/remove a favorite in one tab,
   observe the other tab update.

Notes:

- Tests: add `components/__tests__/favorites.test.tsx` and
  `components/__tests__/favorites.integration.test.tsx` per spec.
- Remember to run lint and typecheck before opening PRs.
