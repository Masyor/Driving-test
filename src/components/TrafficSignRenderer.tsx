import React from "react";

interface TrafficSignRendererProps {
  type: 'speed_30' | 'speed_60' | 'no_entry' | 'give_way' | 'one_way' | 'national_speed' | 'zebra_crossing' | 'stop';
  size?: number; // width and height in pixels
}

export const TrafficSignRenderer: React.FC<TrafficSignRendererProps> = ({ type, size = 110 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center select-none shrink-0"
      id={`traffic-sign-${type}`}
    >
      {type === "stop" && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Red Octagon */}
          <polygon
            points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
            fill="#d32f2f"
            stroke="#ffffff"
            strokeWidth="3.5"
          />
          {/* Inner white circle outline or border if any, simpler STOP is clean */}
          <text
            x="50"
            y="59"
            fill="#ffffff"
            fontFamily="Impact, sans-serif"
            fontSize="26"
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            STOP
          </text>
        </svg>
      )}

      {type === "give_way" && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Up-side down triangle */}
          <polygon
            points="5,15 95,15 50,95"
            fill="#ffffff"
            stroke="#d32f2f"
            strokeWidth="11"
            strokeLinejoin="miter"
          />
        </svg>
      )}

      {type === "no_entry" && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Red disk */}
          <circle cx="50" cy="50" r="45" fill="#d32f2f" />
          {/* White bar */}
          <rect x="18" y="42" width="64" height="16" fill="#ffffff" rx="2" />
        </svg>
      )}

      {type === "speed_30" && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* White disk with red outline */}
          <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#d32f2f" strokeWidth="10" />
          {/* Digits 30 */}
          <text
            x="50"
            y="65"
            fill="#1e293b"
            fontFamily="'Space Grotesk', system-ui, sans-serif"
            fontSize="43"
            fontWeight="800"
            textAnchor="middle"
          >
            30
          </text>
        </svg>
      )}

      {type === "speed_60" && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* White disk with red outline */}
          <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#d32f2f" strokeWidth="10" />
          {/* Digits 60 */}
          <text
            x="50"
            y="65"
            fill="#1e293b"
            fontFamily="'Space Grotesk', system-ui, sans-serif"
            fontSize="43"
            fontWeight="800"
            textAnchor="middle"
          >
            60
          </text>
        </svg>
      )}

      {type === "national_speed" && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* White disk with thin black outline and diagonal stripe */}
          <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
          <line
            x1="18"
            y1="82"
            x2="82"
            y2="18"
            stroke="#0f172a"
            strokeWidth="11"
            strokeLinecap="square"
          />
        </svg>
      )}

      {type === "one_way" && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Blue rectangle */}
          <rect x="15" y="10" width="70" height="80" fill="#1d4ed8" rx="6" />
          {/* Up arrow */}
          <polygon points="50,18 28,42 42,42 42,78 58,78 58,42 72,42" fill="#ffffff" />
        </svg>
      )}

      {type === "zebra_crossing" && (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Blue square */}
          <rect x="5" y="5" width="90" height="90" fill="#1d4ed8" rx="8" />
          {/* White circle */}
          <circle cx="50" cy="50" r="32" fill="#ffffff" />
          {/* Pedestrian crossing stripes */}
          <line x1="28" y1="56" x2="72" y2="56" stroke="#0f172a" strokeWidth="5" />
          <line x1="33" y1="48" x2="67" y2="48" stroke="#0f172a" strokeWidth="5" />
          <line x1="38" y1="40" x2="62" y2="40" stroke="#0f172a" strokeWidth="5" />
          
          {/* Pedestrian triangle silhouette */}
          <polygon points="50,22 42,39 58,39" fill="#0f172a" />
          <line x1="50" y1="39" x2="50" y2="52" stroke="#0f172a" strokeWidth="4" />
          <line x1="50" y1="52" x2="43" y2="60" stroke="#0f172a" strokeWidth="3" />
          <line x1="50" y1="52" x2="57" y2="60" stroke="#0f172a" strokeWidth="3" />
          <line x1="50" y1="44" x2="40" y2="42" stroke="#0f172a" strokeWidth="2.5" />
          <line x1="50" y1="44" x2="60" y2="45" stroke="#0f172a" strokeWidth="2.5" />
          <circle cx="50" cy="21" r="3.5" fill="#0f172a" />
        </svg>
      )}
    </div>
  );
};
