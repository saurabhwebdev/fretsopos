'use client';

import { useEffect } from 'react';

export default function TawkChat() {
  useEffect(() => {
    // Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/68fd0864a434b3194c3c871e/1j8e6hj3v';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
