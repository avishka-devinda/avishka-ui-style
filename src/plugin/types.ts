

export type PluginOptions = {
    colors?: {
      primary?: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
  
      secondary?: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      destructive?: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    text?: {
      primary?: string;
      secondary?: string;
      outline?: string;
      destructive?: string;
    };
    rounded?: string;
    shadow?: "sm" | "md" | "lg" | "xl";
    components?: {
      alert?:{
        background: string,
        text: string
      }
      avatar?:{
        background: string,
        text: string
      }
      card?: {
        title?: {
          fontSize: "sm" | "base" | "lg" | "xl",
          fontWeight: "light" | "normal" | "medium" | "semibold" | "bold"
        },
        description?: {
          fontSize: "sm" | "base" | "lg" | "xl",
          fontWeight: "light" | "normal" | "medium" | "semibold" | "bold"
        },
        background: string;
        text: string
      }
    }
  };
  