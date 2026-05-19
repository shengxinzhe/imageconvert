import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "developer";
  size?: "default" | "sm" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "rounded-full bg-ink text-white hover:bg-[#333]",
          variant === "developer" &&
            "rounded-full bg-[#5e6ad2] text-white hover:bg-[#4f5bb8]",
          variant === "secondary" &&
            "rounded-full border border-hairline bg-canvas text-ink hover:bg-canvas-soft",
          variant === "outline" &&
            "rounded-full border border-hairline bg-canvas text-ink hover:bg-canvas-soft",
          variant === "ghost" && "rounded-full text-body hover:bg-canvas-soft",
          size === "default" && "h-10 px-5 text-sm",
          size === "sm" && "h-8 px-4 text-xs",
          size === "lg" && "h-12 px-6 text-base",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
