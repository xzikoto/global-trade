export const SoybeanMealIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3C7.58172 3 4 6.58172 4 11C4 15.4183 7.58172 19 12 19C16.4183 19 20 15.4183 20 11C20 6.58172 16.4183 3 12 3Z"
      fill="currentColor"
      fillOpacity="0.1"
    />
    {/* Bean shape */}
    <path
      d="M8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
    {/* Meal particles */}
    <circle cx="10" cy="16" r="1" fill="currentColor" />
    <circle cx="13" cy="15" r="1" fill="currentColor" />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
    <circle cx="14" cy="17" r="1" fill="currentColor" />
    <circle cx="11" cy="18" r="1" fill="currentColor" />
    <circle cx="8" cy="17" r="1" fill="currentColor" />
    {/* Bean detail lines */}
    <path
      d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10 8.5C11.3333 9.16667 12.6667 9.16667 14 8.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
