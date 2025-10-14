interface RefreshButtonProps {
  onClick: () => void;
  loading?: boolean;
}

export default function RefreshButton({ onClick, loading = false }: RefreshButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center w-full sm:w-auto shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-500"
      title="Refresh exchange rates"
      aria-label="Refresh exchange rates"
    >
      <svg
        className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    </button>
  );
}
