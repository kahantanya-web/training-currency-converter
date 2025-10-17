# Research: Favorite Currencies

Decision: Use browser `localStorage` as primary persistence with an
in-memory fallback and cross-tab sync via the `storage` event.

Rationale:

- The user requested localStorage specifically; for an anonymous, client-only
  feature this is the simplest and most reliable approach for persistence.  
- localStorage is synchronous and widely supported in evergreen browsers; the
  feature's data size (small array of currency codes) is well within storage
  limits.  
- Cross-tab sync via the `storage` event is a standard browser behavior that
  allows realtime updates between tabs.  

Alternatives considered:

- IndexedDB: more complex and asynchronous; not required for small, simple
  data.  
- Server-side persistence: requires user identity and backend work — out of
  scope for this feature.

Outcome: Implement `tcc.favorites` in localStorage, parse safely, fallback
to in-memory store if unavailable or parsing fails. Add `storage` event
listener to update UI across tabs.
