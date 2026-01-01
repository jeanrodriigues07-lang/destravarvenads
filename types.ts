// Fix: Import React to resolve the "Cannot find namespace 'React'" error
import React from 'react';

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}