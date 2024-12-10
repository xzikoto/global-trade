/* eslint-disable react/prop-types */
export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyle = "px-6 py-2 rounded-lg transition-colors font-medium";
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    secondary: "bg-secondary text-white hover:bg-opacity-90",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
