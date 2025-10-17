# Data Model: Favorite Currencies

## Entity: FavoriteCurrencyList

- Description: An ordered list of ISO-4217 currency codes saved by the user
  for quicker selection.
- Storage: persisted as JSON array under key `tcc.favorites` in localStorage.

Fields:

- `currencies`: array of strings, each a 3-letter ISO-4217 code (uppercase),
  e.g., `["USD","EUR"]`.

Validation rules:

- Each entry MUST be a string of length 3 containing uppercase letters A-Z.
- The list MUST NOT contain duplicate entries.
- Maximum items: recommend 20 to keep UI manageable (configurable).

State transitions:

- Add: append currency if not present (or insert at head if MRU semantics
  chosen).
- Remove: remove entry if present.
- Replace (on invalid persisted data): reset to empty list.
