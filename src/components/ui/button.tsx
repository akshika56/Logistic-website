import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

const variantClasses = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  size = "md",
  variant = "default",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "rounded font-medium transition-colors duration-200",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
