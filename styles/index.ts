import { createStitches } from '@stitches/react';

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
  } = createStitches({
  theme: {

    colors: {
      black: "#000000",

      blue900: "#000D1A",
      blue800: "#00192F",
      blue700: "#032340",
      blue600: "#003362",
      blue500: "#00437F",
      blue400: "#1C5B96",
      blue300: "#3877B2",
      blue200: "#79B1E2",
      blue100: "#CFE2F2",
      blue50: "#F7F9FB",

      slate900: "#111729",
      slate800: "#20293A",
      slate700: "#364153",
      slate600: "#4A5567",
      slate500: "#677389",
      slate400: "#97A2B6",
      slate300: "#CDD5E0",
      slate200: "#E3E8EF",
      slate100: "#F2F5F9",
      slate50: "#F8FAFC",

      red900: "#752522",
      red800: "#8C2822",
      red700: "#AA2E26",
      red600: "#CA3A31",
      red500: "#DD524C",
      red400: "#E77975",
      red300: "#F0A9A7",
      red200: "#F6CCCB",
      red100: "#F9E3E2",
      red50: "#FCF2F2",

      green900: "#285231",
      green800: "#306339",
      green700: "#3C7E44",
      green600: "#4CA154",
      green500: "#5EC269",
      green400: "#77DB89",
      green300: "#9FECB1",
      green200: "#C7F5D3",
      green100: "#E2FBE8",
      green50: "#F2FDF5",

      yellow900: "#6A411C",
      yellow800: "#7D501F",
      yellow700: "#986523",
      yellow600: "#C18D30",
      yellow500: "#E1B53E",
      yellow400: "#F3CE49",
      yellow300: "#F8E164",
      yellow200: "#FCF097",
      yellow100: "#FDF9C9",
      yellow50: "#FEFCEA",

      white: "#FFFFFF",
      white90: "rgba(255, 255, 255, 0.9)",
      white80: "rgba(255, 255, 255, 0.8)",
      white70: "rgba(255, 255, 255, 0.7)",
      white60: "rgba(255, 255, 255, 0.6)",
      white50: "rgba(255, 255, 255, 0.5)",
      white40: "rgba(255, 255, 255, 0.4)",
      white30: "rgba(255, 255, 255, 0.3)",
      white20: "rgba(255, 255, 255, 0.2)",
      white10: "rgba(255, 255, 255, 0.1)",

      stroke40: "rgba(121, 177, 226, 0.4)"
    },

    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
  }
})