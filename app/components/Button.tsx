import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "font-semibold rounded-lg px-6 py-3 transition-colors shadow focus:outline-none focus:ring-2 focus:ring-primary",
        variant === "primary" && "bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-dark)]",
        variant === "outline" && "border border-[color:var(--color-primary)] text-[color:var(--color-primary)] bg-transparent hover:bg-[color:var(--color-primary)] hover:text-white",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
} 