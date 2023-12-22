import plugin from "tailwindcss/plugin";
import type { PluginOptions } from "./types";
import { defaultValues } from "../config";


//console.debug("✨ AUI plugin ready!");

const getValue = (value: any, defaultValue: any) =>
  value !== undefined ? value : defaultValue;


export const theme = plugin.withOptions(
  ({ colors, text, rounded, shadow, components }: PluginOptions ) => {
    return ({ addBase, theme, addUtilities, addComponents }) => {
      // prettier-ignore
      addBase({
        ':root': {
          //primary
          '--aui-primary-100': getValue(colors?.primary?.[100], defaultValues.colors.primary[100]),
          '--aui-primary-200': getValue(colors?.primary?.[200], defaultValues.colors.primary[200]),
          '--aui-primary-300': getValue(colors?.primary?.[300], defaultValues.colors.primary[300]),
          '--aui-primary-400': getValue(colors?.primary?.[400], defaultValues.colors.primary[400]),
          '--aui-primary-500': getValue(colors?.primary?.[500], defaultValues.colors.primary[500]),
          '--aui-primary-600': getValue(colors?.primary?.[600], defaultValues.colors.primary[600]),
          '--aui-primary-700': getValue(colors?.primary?.[700], defaultValues.colors.primary[700]),
          '--aui-primary-800': getValue(colors?.primary?.[800], defaultValues.colors.primary[800]),
          '--aui-primary-900': getValue(colors?.primary?.[900], defaultValues.colors.primary[900]),

          //secondary
          '--aui-secondary-100': getValue(colors?.secondary?.[100], defaultValues.colors.secondary[100]),
          '--aui-secondary-200': getValue(colors?.secondary?.[200], defaultValues.colors.secondary[200]),
          '--aui-secondary-300': getValue(colors?.secondary?.[300], defaultValues.colors.secondary[300]),
          '--aui-secondary-400': getValue(colors?.secondary?.[400], defaultValues.colors.secondary[400]),
          '--aui-secondary-500': getValue(colors?.secondary?.[500], defaultValues.colors.secondary[500]),
          '--aui-secondary-600': getValue(colors?.secondary?.[600], defaultValues.colors.secondary[600]),
          '--aui-secondary-700': getValue(colors?.secondary?.[700], defaultValues.colors.secondary[700]),
          '--aui-secondary-800': getValue(colors?.secondary?.[800], defaultValues.colors.secondary[800]),
          '--aui-secondary-900': getValue(colors?.secondary?.[900], defaultValues.colors.secondary[900]),

          //destructive
          '--aui-destructive-100': getValue(colors?.destructive?.[100], defaultValues.colors.destructive[100]),
          '--aui-destructive-200': getValue(colors?.destructive?.[200], defaultValues.colors.destructive[200]),
          '--aui-destructive-300': getValue(colors?.destructive?.[300], defaultValues.colors.destructive[300]),
          '--aui-destructive-400': getValue(colors?.destructive?.[400], defaultValues.colors.destructive[400]),
          '--aui-destructive-500': getValue(colors?.destructive?.[500], defaultValues.colors.destructive[500]),
          '--aui-destructive-600': getValue(colors?.destructive?.[600], defaultValues.colors.destructive[600]),
          '--aui-destructive-700': getValue(colors?.destructive?.[700], defaultValues.colors.destructive[700]),
          '--aui-destructive-800': getValue(colors?.destructive?.[800], defaultValues.colors.destructive[800]),
          '--aui-destructive-900': getValue(colors?.destructive?.[900], defaultValues.colors.destructive[900]),

          //text
          '--aui-primary-content': getValue(text?.primary , defaultValues.text?.primary),
          '--aui-secondary-content': getValue(text?.secondary , defaultValues.text?.secondary),
          '--aui-outline-content': getValue(text?.outline , defaultValues.text?.outline),
          '--aui-destructive-content': getValue(text?.destructive , defaultValues.text?.destructive),

          //rounded
          '--aui-rounded': getValue(rounded, defaultValues.rounded),

          //shadow
          '--aui-shadow-base': getValue(shadow, defaultValues.shadow),
          '--aui-shadow-sm': theme('boxShadow.sm'),
          '--aui-shadow-md': theme('boxShadow.md'),
          '--aui-shadow-lg': theme('boxShadow.lg'),
          '--aui-shadow-xl': theme('boxShadow.xl'),

          //components

          //card        
          "--aui-card-bg": getValue(components?.card?.background, defaultValues.components.card.background),
          "--aui-card-content": getValue(components?.card?.text, defaultValues.components.card.text),

          "--aui-card-title-font-size":theme(`fontSize.${getValue(components?.card?.title?.fontSize, defaultValues.components.card.title?.fontSize)}`),
          "--aui-card-title-font-weight":theme(`fontWeight.${getValue(components?.card?.title?.fontWeight, defaultValues.components.card.title?.fontWeight)}`),
          "--aui-card-description-font-size":theme(`fontSize.${getValue(components?.card?.description?.fontSize, defaultValues.components.card.description?.fontSize)}`),
          "--aui-card-description-font-weight":theme(`fontWeight.${getValue(components?.card?.description?.fontWeight, defaultValues.components.card.description?.fontWeight)}`),
          

        },
      });

      const neonUtilities: any = {};

      const auiColors: any = {
        "aui-primary": getValue(
          colors?.primary?.[500],
          defaultValues.colors.primary[500]
        ),
        "aui-secondary": getValue(
          colors?.secondary?.[500],
          defaultValues.colors.secondary[500]
        ),
        "aui-destructive": getValue(
          colors?.destructive?.[500],
          defaultValues.colors.destructive?.[500]
        ),
        // Add more color levels as needed
      };

      // Check if auiColors is defined and is an object
      if (auiColors && typeof auiColors === "object") {
        // Iterate over auiColors
        for (const colorLevel in auiColors) {
          const auiColor = auiColors[colorLevel];

          // Check if color values are defined and valid before adding the utility
          if (auiColor && /^#[0-9A-F]{6}$/i.test(auiColor)) {
            // Add transparency to the color value using RGBA notation
            const transparentAuiColor = `rgba(${parseInt(
              auiColor.slice(1, 3),
              16
            )}, ${parseInt(auiColor.slice(3, 5), 16)}, ${parseInt(
              auiColor.slice(5, 7),
              16
            )}, 0.24)`;

            neonUtilities[`.neon-${colorLevel}`] = {
              boxShadow: `${transparentAuiColor} 0px 8px 16px 0px`,
            };
          }
        }
      }

      addUtilities(neonUtilities);


      const neonUtilities2: any = {};

      const auiColors2: any = {
        "aui-primary": getValue(
          colors?.primary?.[500],
          defaultValues.colors.primary[500]
        ),
        "aui-secondary": getValue(
          colors?.secondary?.[500],
          defaultValues.colors.secondary[500]
        ),
        "aui-destructive": getValue(
          colors?.destructive?.[500],
          defaultValues.colors.destructive?.[500]
        ),
        // Add more color levels as needed
      };

      // Check if auiColors2 is defined and is an object
      if (auiColors2 && typeof auiColors2 === "object") {
        // Iterate over auiColors2
        for (const colorLevel in auiColors2) {
          const auiColor = auiColors2[colorLevel];

          // Check if color values are defined and valid before adding the utility
          if (auiColor && /^#[0-9A-F]{6}$/i.test(auiColor)) {
            // Add transparency to the color value using RGBA notation
            const transparentAuiColor2 = `rgba(${parseInt(
              auiColor.slice(1, 3),
              16
            )}, ${parseInt(auiColor.slice(3, 5), 16)}, ${parseInt(
              auiColor.slice(5, 7),
              16
            )}, 0.24)`;

            neonUtilities2[`.shiny-${colorLevel}`] = {
              boxShadow: `0px 1px 2px 0px ${transparentAuiColor2}, 0px 3px 4px -1px ${transparentAuiColor2}, 0px 0px 0px 1px ${transparentAuiColor2} inset, 0px -4px 2px 0px ${transparentAuiColor2} inset, 0px 4px 2px 0px ${transparentAuiColor2} inset`,
            };
          }
        }
      }

      addUtilities(neonUtilities2);

      addComponents({
        ".shiny-btn-base": {
          "box-shadow":
            "0px 1px 2px 0px rgba(16, 24, 40, 0.10), 0px 0px 0px 1px rgba(255, 255, 255, 0.20) inset",
        },
        ".shiny-btn-xl": {
          "box-shadow":
            "0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 3px 4px -1px rgba(0, 0, 0, 0.10), 0px 0px 0px 1px rgba(0, 0, 0, 0.20) inset, 0px -4px 2px 0px rgba(255, 255, 255, 0.12) inset, 0px 4px 2px 0px rgba(255, 255, 255, 0.12) inset",
        },
      });
    };
  },

  ({ colors,components }: PluginOptions) => {
    return {
      theme: {
        extend: {
          colors: {
            "aui-primary": {
              100: "var(--aui-primary-100)",
              200: "var(--aui-primary-200)",
              300: "var(--aui-primary-300)",
              400: "var(--aui-primary-400)",
              500: "var(--aui-primary-500)",
              600: "var(--aui-primary-600)",
              700: "var(--aui-primary-700)",
              800: "var(--aui-primary-800)",
              900: "var(--aui-primary-900)",
            },

            "aui-secondary": {
              100: "var(--aui-secondary-100)",
              200: "var(--aui-secondary-200)",
              300: "var(--aui-secondary-300)",
              400: "var(--aui-secondary-400)",
              500: getValue(colors?.secondary?.[500], defaultValues.colors.secondary[500]),
              600: getValue(colors?.secondary?.[600], defaultValues.colors.secondary[600]),
              700: "var(--aui-secondary-700)",
              800: "var(--aui-secondary-800)",
              900: "var(--aui-secondary-900)",
            },
            "aui-destructive": {
              100: "var(--aui-destructive-100)",
              200: "var(--aui-destructive-200)",
              300: "var(--aui-destructive-300)",
              400: "var(--aui-destructive-400)",
              500: "var(--aui-destructive-500)",
              600: "var(--aui-destructive-600)",
              700: "var(--aui-destructive-700)",
              800: "var(--aui-destructive-800)",
              900: "var(--aui-destructive-900)",
            },

            "aui-card": "var(--aui-card-bg)",
            "aui-avatar": getValue(
              components?.avatar?.background,
              defaultValues.components.avatar.background
            ),
            "aui-alert": getValue(
              components?.alert?.background,
              defaultValues.components.alert.background
            ),
          },

          // Add more theme extensions as needed
          textColor: {
            aui: {
              "primary-content": "var(--aui-primary-content)",
              "secondary-content": "var(--aui-secondary-content)",
              "outline-content": "var(--aui-ouline-content)",
              "destructive-content": "var(--aui-destructive-content)",
              "card-content": getValue(
                components?.card?.text,
                defaultValues.components.card.text
              ),
              "avatar-content": getValue(
                components?.avatar?.text,
                defaultValues.components.avatar.text
              ),
              "avatar-alert": getValue(
                components?.alert?.text,
                defaultValues.components.alert.text
              ),
            },
          },
          borderRadius: {
            "aui-md": "var(--aui-rounded)",
            "aui-lg": "calc(var(--aui-rounded) - 2px)",
            "aui-xl": "calc(var(--aui-rounded) - 4px)",
          },
          boxShadow: {
            "aui-base": "var(--aui-shadow-base)",
            "aui-sm": "var(--aui-shadow-sm)",
            "aui-md": "var(--aui-shadow-md)",
            "aui-lg": "var(--aui-shadow-lg)",
            "aui-xl": "var(--aui-shadow-xl)",
          },
          fontSize: {
            "aui-card-title": "var(--aui-card-title-font-size)",
            "aui-card-description": "var(--aui-card-description-font-size)",
          },
          fontWeight: {
            "aui-card-title": "var(--aui-card-title-font-weight)",
            "aui-card-description": "var(--aui-card-description-font-weight)",
          },
        },
      },
    };
  }
);
