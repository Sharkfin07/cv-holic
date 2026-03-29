import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const GlobalButton = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  // Base classes (Common to all buttons)
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

  // Variant classes
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-gray-500 text-white hover:bg-cv-green",
    secondary: "bg-slate-200 text-slate-900 hover:bg-slate",
    outline: "border border-slate-300 bg-transparent hover:bg-slate-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  // Size classes
  const sizeClasses: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-8 text-base",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default GlobalButton;
