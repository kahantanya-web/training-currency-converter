import { useState, useEffect, useCallback } from 'react';
import { ExchangeRates } from '@/types';

export function useExchangeRates() {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/rates', {
        cache: 'no-store', // Force fresh data on refresh
      });
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch exchange rates');
      }

      setExchangeRates(data.data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch exchange rates. Please try again later.');
      console.error('Error fetching rates:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return { exchangeRates, loading, error, refreshRates: fetchRates };
}
