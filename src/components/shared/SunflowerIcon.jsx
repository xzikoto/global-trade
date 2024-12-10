
export function SunflowerIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="15" fill="#FFD700" /> {/* Center */}
      {[...Array(12)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 50 50)`}>
          <path
            d="M 50 35 Q 50 25 55 20 Q 50 25 45 20 Q 50 25 50 35"
            fill="#FFD700"
            className="animate-float"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        </g>
      ))}
    </svg>
  );
}