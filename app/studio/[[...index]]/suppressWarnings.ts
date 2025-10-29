// Suppress known React DOM warnings from Sanity Studio
// This is a temporary workaround until Sanity fully supports React 19
if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('disableTransition')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
}

export {};
