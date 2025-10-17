/* eslint-env jest */

let favorites: any;

beforeEach(() => {
  // Start fresh for each test: clear storage and reload module
  localStorage.clear();
  jest.resetModules();
  favorites = require('./favorites').default;
});

test('add and persist a favorite', () => {
  favorites.add('EUR');
  expect(favorites.list()).toContain('EUR');
  const raw = localStorage.getItem('tcc.favorites');
  expect(raw).not.toBeNull();
  expect(JSON.parse(raw!)).toEqual(['EUR']);
});

test('duplicates are not added', () => {
  favorites.add('USD');
  favorites.add('USD');
  expect(favorites.list()).toEqual(['USD']);
});

test('remove a favorite', () => {
  favorites.add('JPY');
  expect(favorites.list()).toContain('JPY');
  favorites.remove('JPY');
  expect(favorites.list()).not.toContain('JPY');
  expect(JSON.parse(localStorage.getItem('tcc.favorites')!)).toEqual([]);
});

test('invalid codes are ignored', () => {
  favorites.add('EURO');
  favorites.add('12');
  favorites.add('us');
  expect(favorites.list()).toEqual([]);
});

test('enforces max items and keeps most recent', () => {
  const gen = (i: number) => 'A' + String.fromCharCode(65 + (i % 26)) + String.fromCharCode(65 + ((i + 1) % 26));
  const total = 22;
  for (let i = 0; i < total; i++) {
    favorites.add(gen(i));
  }
  const list = favorites.list();
  expect(list.length).toBe(20);
  // last added should be present
  expect(list).toContain(gen(total - 1));
});

test('subscribe receives updates and can unsubscribe', () => {
  const cb = jest.fn();
  const unsubscribe = favorites.subscribe(cb);
  // initial call with current list
  expect(cb).toHaveBeenCalledTimes(1);
  favorites.add('CHF');
  expect(cb).toHaveBeenCalledTimes(2);
  unsubscribe();
  favorites.add('SEK');
  expect(cb).toHaveBeenCalledTimes(2); // no more calls after unsubscribe
});
