export const BarleyIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main stem */}
    <path
      d="M12 4V20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Left side spikes */}
    <path
      d="M8 8L11 7M8 10L11 9M8 12L11 11M8 14L11 13M8 16L11 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Right side spikes */}
    <path
      d="M16 8L13 7M16 10L13 9M16 12L13 11M16 14L13 13M16 16L13 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Top grain details */}
    <path
      d="M12 4C11 4 10 4.5 10 5.5C10 6.5 11 7 12 7C13 7 14 6.5 14 5.5C14 4.5 13 4 12 4Z"
      fill="currentColor"
    />
  </svg>
);
