export const LinenIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main seed shape */}
    <path
      d="M12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
    
    {/* Seed outline */}
    <path
      d="M12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    
    {/* Texture lines */}
    <path
      d="M9 8C10 8.5 11 8.5 12 8C13 7.5 14 7.5 15 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9 10C10 10.5 11 10.5 12 10C13 9.5 14 9.5 15 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9 12C10 12.5 11 12.5 12 12C13 11.5 14 11.5 15 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    
    {/* Stem */}
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
