import { createEffect, createSignal, on, onMount } from 'solid-js';
import { OHLCChart, TimeframeSelector, type OHLCData, type TimeframeMinutes } from './lib';
import { generateSampleData } from './lib/data-generation/data';


export default function App() {
  const [data, setData] = createSignal<OHLCData[]>([]);
  const [timeframe, setTimeframe] = createSignal<TimeframeMinutes>(1);

  createEffect(on(timeframe, () => {
    setData(generateSampleData(500, `${timeframe()}m`));
  }))

  return (
    <div style={{ padding: '20px', background: '#0a0a14', 'min-height': '100vh' }}>
      <h1 style={{ color: '#fff', 'margin-bottom': '20px' }}>OHLC Chart Demo</h1>

      {/* Timeframe selector */}
      <div style={{ 'margin-bottom': '15px' }}>
        <TimeframeSelector
          value={timeframe()}
          onChange={setTimeframe}
        />
      </div>

      <OHLCChart
        data={data()}
        width={900}
        height={500}
        timeframe={timeframe()}
      />
    </div>
  );
}
