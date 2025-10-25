'use client';

import { useEffect } from 'react';
import { clarity } from '@microsoft/clarity';

export default function ClarityAnalytics() {
  useEffect(() => {
    // Initialize Clarity with your project ID
    // You'll need to replace 'YOUR_CLARITY_PROJECT_ID' with your actual Clarity project ID
    clarity.init('YOUR_CLARITY_PROJECT_ID');
  }, []);

  return null;
}
