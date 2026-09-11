import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const buttonClasses = (variant: string, size: string, className: string) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<string, string> = {
    primary:
      "bg-copper text-bg hover:bg-copper-dark shadow-[0_0_20px_rgba(227,140,53,0.3)] hover:shadow-[0_0_30px_rgba(227,140,53,0.5)]",
    secondary:
      "border border-cream-faint text-cream hover:bg-cream-faint",
    ghost:
      "text-cream-muted hover:text-cream hover:bg-cream-faint",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;
};

export function getButtonClasses(variant = "primary", size = "md", className = "") {
  return buttonClasses(variant, size, className);
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonClasses(variant, size, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
