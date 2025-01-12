import { clsx } from "clsx";
import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex bg-gradient-to-r from-blue-200 shadow-lg to-violet-400 border text-black/75 font-semibold items-center justify-center rounded-full transition-all",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-blue-800 text-white/80 hover:bg-blue-950 delay-300 transi focus:ring-blue-500":
            variant === "primary",
          "bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-500":
            variant === "secondary",
          "border-2 border-slate-300 text-slate-700 hover:border-slate-400 focus:ring-slate-500":
            variant === "outline",
          "px-2.5 py-1.5 text-sm": size === "sm",
          "px-4 py-2": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function DeleteButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-red-700 text-white hover:bg-red-950 delay-300 transi focus:ring-red-500":
            variant === "primary",
          "bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-slate-500":
            variant === "secondary",
          "border-2 border-slate-300 text-slate-700 hover:border-slate-400 focus:ring-slate-500":
            variant === "outline",
          "px-2.5 py-1.5 text-sm": size === "sm",
          "px-4 py-2": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
