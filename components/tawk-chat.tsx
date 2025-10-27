'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export default function TawkChat() {
  useEffect(() => {
    // Initialize Tawk API object
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

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

    // Customize widget when loaded
    window.Tawk_API.onLoad = function() {
      // Hide the default greeting/status message
      window.Tawk_API.hideWidget();
      
      // Show widget after customization
      setTimeout(() => {
        window.Tawk_API.showWidget();
      }, 100);
      
      // Set custom style
      window.Tawk_API.customStyle = {
        visibility: {
          desktop: {
            position: 'br', // bottom-right
            xOffset: 20,
            yOffset: 20
          },
          mobile: {
            position: 'br',
            xOffset: 10,
            yOffset: 10
          }
        }
      };
    };

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <style jsx global>{`
      /* Customize Tawk.to widget appearance */
      #tawk-bubble-container {
        bottom: 20px !important;
        right: 20px !important;
        transform: scale(0.85) !important;
        transform-origin: bottom right !important;
      }
      
      /* Make bubble smaller and more minimal */
      .tawk-button {
        box-shadow: 0 4px 12px rgba(229, 9, 20, 0.3) !important;
      }
      
      /* Hide status text and badges - "We are here" etc */
      .tawk-text-truncate,
      .tawk-badge,
      .tawk-header-text,
      .tawk-bubble-text,
      .tawk-name,
      .tawk-status-text,
      .tawk-custom-color-container {
        display: none !important;
      }
      
      /* Hide the status bubble completely */
      .tawk-bubble {
        display: none !important;
      }
      
      /* Flatten the design */
      .tawk-button-circle {
        border-radius: 50% !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
      }
      
      /* Smaller chat window */
      .tawk-min-container {
        border-radius: 12px !important;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
        width: 350px !important;
        height: 500px !important;
      }
      
      /* Adjust for mobile */
      @media (max-width: 768px) {
        #tawk-bubble-container {
          bottom: 10px !important;
          right: 10px !important;
          transform: scale(0.8) !important;
        }
        
        .tawk-min-container {
          width: 320px !important;
          height: 450px !important;
        }
      }
    `}</style>
  );
}
