
export type SlideType = 'landing' | 'standard' | 'diagram' | 'comparison' | 'prototype' | 'logic';

export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  type?: SlideType;
  content: string[];
  facts?: { text: string; source: string }[];
  kpis?: { label: string; value: string; sub?: string }[];
  visualData?: any;
}

export interface CompetencyData {
  subject: string;
  score: number;
  stateAvg: number;
  globalBenchmark: number;
  fullMark: number;
}

export interface ProgressionData {
  month: string;
  score: number;
  growth: number;
}
