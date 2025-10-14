import { renderHook, waitFor, act } from '@testing-library/react';
import { useExchangeRates } from './useExchangeRates';

// Mock fetch globally
global.fetch = jest.fn();

describe('useExchangeRates', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (global.fetch as jest.Mock).mockClear();
  });

  it('should fetch exchange rates on mount', async () => {
    const mockRates = {
      base: 'USD',
      rates: { USD: 1, EUR: 0.85, GBP: 0.73 },
      timestamp: Date.now(),
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ success: true, data: mockRates }),
    });

    const { result } = renderHook(() => useExchangeRates());

    expect(result.current.loading).toBe(true);
    expect(result.current.exchangeRates).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.exchangeRates).toEqual(mockRates);
    expect(result.current.error).toBe(null);
    expect(global.fetch).toHaveBeenCalledWith('/api/rates', { cache: 'no-store' });
    expect(result.current.refreshRates).toBeDefined();
  });

  it('should handle fetch errors', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ success: false, error: 'API Error' }),
    });

    const { result } = renderHook(() => useExchangeRates());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.exchangeRates).toBe(null);
    expect(result.current.error).toBe('API Error');
  });

  it('should handle network errors', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error('Network error')
    );

    const { result } = renderHook(() => useExchangeRates());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.exchangeRates).toBe(null);
    expect(result.current.error).toBe('Network error');
  });

  it('should handle fetch failure with default error message', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error());

    const { result } = renderHook(() => useExchangeRates());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe(
      'Failed to fetch exchange rates. Please try again later.'
    );
  });

  it('should not update state if component unmounts before fetch completes', async () => {
    const mockRates = {
      base: 'USD',
      rates: { USD: 1, EUR: 0.85 },
    };

    let resolvePromise: (value: any) => void;
    const fetchPromise = new Promise((resolve) => {
      resolvePromise = resolve;
    });

    (global.fetch as jest.Mock).mockReturnValueOnce(fetchPromise);

    const { result, unmount } = renderHook(() => useExchangeRates());

    expect(result.current.loading).toBe(true);

    // Unmount before fetch completes
    unmount();

    // Resolve the fetch after unmount
    resolvePromise!({
      json: async () => ({ success: true, data: mockRates }),
    });

    // Wait a bit to ensure no updates occur
    await new Promise((resolve) => setTimeout(resolve, 100));

    // State should remain as it was before unmount
    expect(result.current.loading).toBe(true);
  });

  it('should fetch from correct API endpoint', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ success: true, data: {} }),
    });

    renderHook(() => useExchangeRates());

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/rates', { cache: 'no-store' });
    });
  });

  it('should expose refreshRates function', async () => {
    const mockRates = {
      base: 'USD',
      rates: { USD: 1, EUR: 0.85 },
      timestamp: Date.now(),
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({ success: true, data: mockRates }),
    });

    const { result } = renderHook(() => useExchangeRates());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(typeof result.current.refreshRates).toBe('function');
  });

  it('should refresh rates when refreshRates is called', async () => {
    const initialMockRates = {
      base: 'USD',
      rates: { USD: 1, EUR: 0.85 },
      timestamp: Date.now(),
    };

    const updatedMockRates = {
      base: 'USD',
      rates: { USD: 1, EUR: 0.90 },
      timestamp: Date.now() + 1000,
    };

    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        json: async () => ({ success: true, data: initialMockRates }),
      })
      .mockResolvedValueOnce({
        json: async () => ({ success: true, data: updatedMockRates }),
      });

    const { result } = renderHook(() => useExchangeRates());

    // Wait for initial fetch
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.exchangeRates).toEqual(initialMockRates);
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Call refreshRates
    await act(async () => {
      await result.current.refreshRates();
    });

    // Wait for refresh to complete
    await waitFor(() => {
      expect(result.current.exchangeRates).toEqual(updatedMockRates);
    });

    expect(global.fetch).toHaveBeenCalledTimes(2);
  });

  it('should set loading state during refresh', async () => {
    const mockRates = {
      base: 'USD',
      rates: { USD: 1, EUR: 0.85 },
      timestamp: Date.now(),
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({ success: true, data: mockRates }),
    });

    const { result } = renderHook(() => useExchangeRates());

    // Wait for initial fetch
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Start refresh
    act(() => {
      result.current.refreshRates();
    });

    // Loading should be true during refresh
    expect(result.current.loading).toBe(true);

    // Wait for refresh to complete
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });

  it('should handle errors during refresh', async () => {
    const mockRates = {
      base: 'USD',
      rates: { USD: 1, EUR: 0.85 },
      timestamp: Date.now(),
    };

    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({
        json: async () => ({ success: true, data: mockRates }),
      })
      .mockResolvedValueOnce({
        json: async () => ({ success: false, error: 'Refresh failed' }),
      });

    const { result } = renderHook(() => useExchangeRates());

    // Wait for initial fetch
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe(null);

    // Call refreshRates
    await act(async () => {
      await result.current.refreshRates();
    });

    // Wait for error to be set
    await waitFor(() => {
      expect(result.current.error).toBe('Refresh failed');
    });
  });
});
