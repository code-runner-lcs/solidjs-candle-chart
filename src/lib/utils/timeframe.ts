import type { OHLCData } from '../core/types';

/** Available timeframe values in minutes */
export type TimeframeMinutes = 1 | 2 | 3 | 5 | 10 | 15 | 30 | 60 | 120 | 240 | 1440;

export interface Timeframe {
  value: TimeframeMinutes;
  label: string;
}

/** Predefined timeframes */
export const TIMEFRAMES: Timeframe[] = [
  { value: 1, label: '1m' },
  { value: 2, label: '2m' },
  { value: 3, label: '3m' },
  { value: 5, label: '5m' },
  { value: 10, label: '10m' },
  { value: 15, label: '15m' },
  { value: 30, label: '30m' },
  { value: 60, label: '1h' },
  { value: 120, label: '2h' },
  { value: 240, label: '4h' },
  { value: 1440, label: '1D' },
];
