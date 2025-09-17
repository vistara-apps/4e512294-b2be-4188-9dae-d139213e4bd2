'use client';

import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <AlertTriangle className="h-12 w-12 text-danger mx-auto mb-4" />
        <h2 className="h1 mb-4">Something went wrong!</h2>
        <p className="text-text-secondary mb-6">
          We encountered an error while loading SignalSage. Please try again.
        </p>
        <button
          onClick={reset}
          className="btn-primary inline-flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
      </div>
    </div>
  );
}
