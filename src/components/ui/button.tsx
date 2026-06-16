import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"; // Simplified asChild logic
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[#182D18] text-[#F4F2E8] hover:bg-[#546E52]": variant === "default",
            "bg-[#E2EADF] text-[#182D18] hover:bg-[#E2EADF]/80": variant === "secondary",
            "border border-[#182D18] bg-transparent text-[#182D18] hover:bg-[#E2EADF]": variant === "outline",
            "hover:bg-[#E2EADF] hover:text-[#182D18]": variant === "ghost",
            "text-[#182D18] underline-offset-4 hover:underline": variant === "link",
            "min-h-[44px] px-4 py-2": size === "default",
            "min-h-[44px] rounded-full px-4 text-xs": size === "sm",
            "min-h-[48px] rounded-full px-8 text-base": size === "lg",
            "h-11 w-11": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
