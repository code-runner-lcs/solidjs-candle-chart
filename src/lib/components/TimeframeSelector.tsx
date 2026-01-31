import type { TimeframeMinutes } from '../utils/timeframe';
import { TIMEFRAMES } from '../utils/timeframe';

export interface TimeframeSelectorProps {
  value: TimeframeMinutes;
  onChange: (timeframe: TimeframeMinutes) => void;
  style?: Record<string, string | number>;
}

export function TimeframeSelector(props: TimeframeSelectorProps) {
  return (
    <select
      value={props.value}
      onChange={(e) => props.onChange(Number(e.currentTarget.value) as TimeframeMinutes)}
      style={{
        padding: '8px 16px',
        background: '#2a2a3e',
        color: '#fff',
        border: '1px solid #404040',
        'border-radius': '4px',
        cursor: 'pointer',
        'font-size': '14px',
        'min-width': '120px',
        ...props.style,
      }}
    >
      {TIMEFRAMES.map((tf) => (
        <option value={tf.value}>
          {tf.label}
        </option>
      ))}
    </select>
  );
}
