export default function () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
      <defs>
        <linearGradient id="shimmer" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#e0e0e0">
            <animate
              attributeName="offset"
              values="-1; 2"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stop-color="#f5f5f5">
            <animate
              attributeName="offset"
              values="-0.5; 2.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stop-color="#e0e0e0">
            <animate
              attributeName="offset"
              values="0; 3"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>

      <rect width="400" height="500" fill="#f0f2f5" />

      <circle cx="80" cy="80" r="40" fill="url(#shimmer)" />

      <rect
        x="130"
        y="70"
        width="150"
        height="20"
        rx="4"
        fill="url(#shimmer)"
      />

      <rect
        x="130"
        y="95"
        width="120"
        height="16"
        rx="4"
        fill="url(#shimmer)"
      />

      <rect x="40" y="160" width="320" height="300" rx="8" fill="white" />

      <rect
        x="60"
        y="180"
        width="150"
        height="24"
        rx="4"
        fill="url(#shimmer)"
      />

      <rect x="60" y="230" width="80" height="16" rx="4" fill="url(#shimmer)" />

      <rect
        x="60"
        y="255"
        width="280"
        height="40"
        rx="4"
        fill="url(#shimmer)"
      />

      <rect x="60" y="315" width="60" height="16" rx="4" fill="url(#shimmer)" />

      <rect
        x="60"
        y="340"
        width="280"
        height="40"
        rx="4"
        fill="url(#shimmer)"
      />

      <rect
        x="60"
        y="400"
        width="280"
        height="40"
        rx="4"
        fill="url(#shimmer)"
      />
    </svg>
  );
}
