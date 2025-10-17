import { CURRENCIES } from '@/utils/currency';
import { useEffect, useState } from 'react';
import favorites from '@/utils/favorites';

interface CurrencySelectProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export default function CurrencySelect({ value, onChange, label }: CurrencySelectProps) {
  const [isFav, setIsFav] = useState(false);

  const [favList, setFavList] = useState<string[]>(favorites.list());

  useEffect(() => {
    // subscribe to favorites updates
    const unsubscribe = favorites.subscribe((list) => {
      setFavList(list);
      setIsFav(list.includes(value));
    });
    // also check initial
    const initial = favorites.list();
    setFavList(initial);
    setIsFav(initial.includes(value));
    return unsubscribe;
  }, [value]);

  function toggleFavorite(e: React.MouseEvent) {
    e.preventDefault();
    if (isFav) {
      favorites.remove(value);
    } else {
      favorites.add(value);
    }
  }

  return (
    <div className="flex-1 w-full sm:w-auto relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none text-lg bg-white cursor-pointer hover:border-gray-400 transition-colors appearance-none"
        >
          {/* Render favorites first */}
          {favList.map((code) => {
            const currency = CURRENCIES.find((c) => c.code === code);
            if (!currency) return null;
            return (
              <option
                key={`fav-${currency.code}`}
                value={currency.code}
                style={{ backgroundColor: '#fff7cc' }}
              >
                {currency.code} - {currency.name}
              </option>
            );
          })}

          {/* Then render the rest (exclude favorites) */}
          {CURRENCIES.filter((c) => !favList.includes(c.code)).map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          ))}
        </select>

        <button
          aria-pressed={isFav}
          aria-label={isFav ? 'Unfavorite currency' : 'Favorite currency'}
          onClick={toggleFavorite}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-yellow-500 hover:bg-yellow-50 focus:outline-none z-10"
        >
          {isFav ? (
            <svg data-testid="star-filled" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.853 2.708c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.146 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
            </svg>
          ) : (
            <svg data-testid="star-outline" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L12 17.347l-3.853 2.708c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L3.146 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
            </svg>
          )}
        </button>
      </div>

      <div className="absolute inset-y-0 right-10 flex items-center pr-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
