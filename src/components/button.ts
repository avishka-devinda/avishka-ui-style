import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

// Define base button classes using class-variance-authority

const baseButtonClasses = cva(
  [
    "leading-none",
    "flex",
    "gap-2",
    "items-center",
    "justify-center",
    "focus:outline-none",
    "focus-visible:ring-4",
    "transition-all",
    "ring-primary-300",
    "disabled:cursor-not-allowed",
    "font-medium",
    "text-sm",
    "rounded-aui-md"

  ],
  {
    variants: {
      variant: {
        primary: [
          "rounded-aui-md",
          "bg-aui-primary-500",
          "text-aui-primary-content",
          "hover:bg-aui-primary-600",
          "disabled:bg-disabled",
          "disabled:border-disabled",
          "disabled:text-disabled-foreground",
        ],
        secondary: [
          "rounded-aui-md",
          "bg-aui-secondary-500",
          "text-aui-secondary-content",
          "hover:bg-aui-secondary-600/30",
          "disabled:bg-disabled",
          "disabled:border-disabled",
          "disabled:text-disabled-foreground",
        ],
        destructive: [
          "rounded-aui-md",
          "bg-aui-destructive-500",
          "text-aui-destructive-content",
          "hover:bg-aui-destructive-600",
          "disabled:bg-disabled",
          "disabled:border-disabled",
          "disabled:text-disabled-foreground",
        ],
        outline: [
          "rounded-aui-md",
          "bg-transparent",
          "text-aui-primary-500",
          "border",
          "border-aui-primary-500",
          "disabled:bg-disabled",
          "disabled:border-disabled",
          "disabled:text-disabled-foreground",
        ],
      },
      size: {
        sm: ["text-sm", "py-1.5", "min-h-9", "px-3"],
        md: ["text-sm", "py-2.5", "min-h-10", "px-6"],
        lg: ["text-md", "py-2.5", "min-h-11", "px-5"],
        xl: ["text-md", "py-3", "min-h-12", "px-6"],
      },
      btnType: {
        button: "shadow-sm",
        icon: ["px-0", "rounded-full"],
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
    compoundVariants: [
      { btnType: "icon", size: "sm", class: "h-10 w-10" },
      { btnType: "icon", size: "md", class: "h-11 w-11" },
      { btnType: "icon", size: "lg", class: "h-12 w-12" },
      { btnType: "icon", size: "xl", class: "h-[52px] w-[52px]" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      btnType: "button",
    },
  }
);

// Define the type for button variant props
type ButtonVariantProps = VariantProps<typeof baseButtonClasses>;


function button({ variant, size, btnType }: ButtonVariantProps = {}, additionalClasses?: string | string[]) {
  const defaultClasses = baseButtonClasses({ variant, size, btnType });
  return twMerge(clsx(defaultClasses, additionalClasses));
}



//Button.displayName = "button";

export { button };