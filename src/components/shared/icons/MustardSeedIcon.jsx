export const MustardSeedIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main circular seed cluster */}
    <circle
      cx="12"
      cy="10"
      r="6"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    
    {/* Individual seeds */}
    <circle cx="10" cy="8" r="1.5" fill="currentColor" />
    <circle cx="14" cy="8" r="1.5" fill="currentColor" />
    <circle cx="12" cy="11" r="1.5" fill="currentColor" />
    <circle cx="9" cy="11" r="1.5" fill="currentColor" />
    <circle cx="15" cy="11" r="1.5" fill="currentColor" />
    <circle cx="11" cy="14" r="1.5" fill="currentColor" />
    <circle cx="13" cy="14" r="1.5" fill="currentColor" />
    
    {/* Plant stem */}
    <path
      d="M12 16V20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    
    {/* Small leaves */}
    <path
      d="M10 18L12 17M14 18L12 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
