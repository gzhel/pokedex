"use client";

import { useEffect } from "react";

interface FunctionalityErrorProps {
  error: Error;
  reset: () => void;
}

// An error file defines an error boundary for a route segment.
// NOTE: an error file should invoke from client in order not to cause a server error
const FunctionalityError = ({ error, reset }: FunctionalityErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
};

export default FunctionalityError;
