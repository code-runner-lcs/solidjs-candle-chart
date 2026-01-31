// Main component
export { OHLCChart } from './components/OHLCChart';
export { TimeframeSelector } from './components/TimeframeSelector';
export type { TimeframeSelectorProps } from './components/TimeframeSelector';

// Types
export type {
  OHLCData,
  Viewport,
  Dimensions,
  ChartTheme,
  OHLCChartProps,
} from './core/types';
export { DEFAULT_THEME } from './core/types';

// Utilities
export { createScale } from './core/scale';
export type { Scale } from './core/scale';
export { fitToData, validateViewport } from './utils/viewport';
export { TIMEFRAMES } from './utils/timeframe';
export type { Timeframe, TimeframeMinutes } from './utils/timeframe';
export { validateOHLCData, isDataSorted, sortOHLCDataByTime } from './utils/validation';