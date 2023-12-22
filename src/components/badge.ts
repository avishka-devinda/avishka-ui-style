import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

// Define base badge classes using class-variance-authority
//<span className="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-full text-xs font-medium bg-aui-primary-500 text-aui-primary-content">

const baseBadgeClasses = cva(
  [
    "leading-none",
    "inline-flex",
    "gap-x-1.5",
    "items-center",
    "justify-center",
    "transition-all",
    "font-medium",
    "text-xs",
    "rounded-aui-md"
    
  ],
  {
    variants: {
      variant: {
        primary: [
          "rounded-aui-md",
          "bg-aui-primary-500",
          "text-aui-primary-content",
        ],
        secondary: [
          "rounded-aui-md",
          "bg-aui-secondary-500",
          "text-aui-secondary-content",
        ],
        destructive: [
          "rounded-aui-md",
          "bg-aui-destructive-500",
          "text-aui-destructive-content",
         
        ],
        outline: [
          "rounded-aui-md",
          "bg-transparent",
          "text-aui-primary-500",
          "border",
          "border-aui-primary-500",
        ]
      },
      size: {
        md: [ "py-1",  "px-3"],
      },
      btnType: {
        badge: "shadow-sm",
        shiny : "shiny-btn-base ",
        shinyXl : "shiny-btn-xl ",
        shinyPrimary : "shiny-btn-primary ",
        shinySecondary : "shiny-btn-secondary ",
        shinyDestructive : "shiny-btn-destructive ",
        neonPrimary : "neon-aui-primary ",
        neonSecondary : "neon-aui-secondary ",
        neonDestructive : "neon-aui-destructive ",


      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      btnType: "badge",
    },
  }
);

// Define the type for badge variant props
type BadgeVariantProps = VariantProps<typeof baseBadgeClasses>;


function badge({ variant, size, btnType }: BadgeVariantProps = {}, additionalClasses?: string | string[]) {
  const defaultClasses = baseBadgeClasses({ variant, size, btnType });
  return twMerge(clsx(defaultClasses, additionalClasses));
}



//Badge.displayName = "badge";

export { badge };