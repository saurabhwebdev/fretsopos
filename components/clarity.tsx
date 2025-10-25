'use client';

import { useEffect } from 'react';
import { clarity } from '@microsoft/clarity';

export default function ClarityAnalytics() {
  useEffect(() => {
    // Initialize Clarity with project ID
    clarity.init('tvstf1ncoi');
  }, []);

  return null;
}
