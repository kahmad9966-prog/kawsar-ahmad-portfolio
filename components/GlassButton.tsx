"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "ghost";
};

const GlassButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "solid", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "cursor-interactive reflection-sweep relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out active:scale-95",
          variant === "solid"
            ? "glass-accent bg-accent/10 text-white hover:shadow-glow-md hover:-translate-y-0.5"
            : "glass text-ink hover:border-accent/40 hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
GlassButton.displayName = "GlassButton";

export default GlassButton;
