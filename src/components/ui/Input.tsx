import { clsx } from "clsx";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        "w-full  border-b border-blue-800 px-4 py-2.5",
        "bg-transparent text-slate-900 placeholder:text-gray-800",
        "transition-colors duration-200",
        "focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10",
        "outline-none  ",
        className
      )}
      {...props}
    />
  );
}
