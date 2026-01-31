# solidjs-ohlc-chart

OHLC candlestick chart component for [SolidJS](https://www.solidjs.com/). Zoom, pan, crosshair and theme support.

## Installation

```bash
npm install solidjs-ohlc-chart solid-js
# or pnpm add solidjs-ohlc-chart solid-js
# or yarn add solidjs-ohlc-chart solid-js
```

## Usage

```tsx
import { OHLCChart } from 'solidjs-ohlc-chart';
import type { OHLCData } from 'solidjs-ohlc-chart';

const data: OHLCData[] = [
  { time: 1700000000000, open: 100, high: 105, low: 98, close: 103 },
  { time: 1700003600000, open: 103, high: 108, low: 102, close: 106 },
  // ...
];

function App() {
  return (
    <OHLCChart
      data={data}
      width={800}
      height={400}
    />
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `data` | `OHLCData[]` | Array of OHLC candles (required). `time` in ms, `open`/`high`/`low`/`close` as numbers. |
| `width` | `number` | Chart width in pixels (default: 800). |
| `height` | `number` | Chart height in pixels (default: 400). |
| `timeRange` | `[number, number]` | Initial time range (optional). |
| `priceRange` | `[number, number]` | Initial price range (optional). |
| `timeframe` | `number` | Candle timeframe in minutes (optional, for labels). |
| `theme` | `Partial<ChartTheme>` | Override theme colors (optional). |
| `skipValidation` | `boolean` | Skip data validation when source is trusted (optional). |
| `onViewportChange` | `(viewport: Viewport) => void` | Callback when viewport changes (optional). |

## Exports

- **Components:** `OHLCChart`, `TimeframeSelector`
- **Types:** `OHLCData`, `Viewport`, `ChartTheme`, `OHLCChartProps`, etc.
- **Utils:** `createScale`, `fitToData`, `validateViewport`, `validateOHLCData`, `sortOHLCDataByTime`, `TIMEFRAMES`

## Demo / development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to run the demo app.

## Build the library

```bash
npm run build:lib
```

Output is in `dist/` (ESM + `.d.ts`).

## License

MIT
