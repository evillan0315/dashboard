"use client";
import { Roboto, DM_Sans, Lato, Caveat, Oswald } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import { red, blueGrey, grey, purple } from "@mui/material/colors";

const primary = blueGrey[500];

const secondary = blueGrey[200]; // #ff4081

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const dmSans = DM_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const lato = Lato({
  weight: ["300", "400", "700"], // Common weights for versatile usage
  subsets: ["latin", "latin-ext"], // Extended character support
  display: "swap", // Use 'swap' to ensure text is visible during font loading
  preload: true, // Preload for optimized performance
});
export const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"], // Common weights for versatile usage
  subsets: ["latin", "latin-ext"], // Extended character support
  display: "swap", // Use 'swap' to ensure text is visible during font loading
  preload: true, // Preload for optimized performance
});
export const caveat = Caveat({
  weight: ["400", "500", "600", "700"], // Common weights for versatile usage
  subsets: ["latin", "latin-ext"], // Extended character support
  display: "swap", // Use 'swap' to ensure text is visible during font loading
  preload: true, // Preload for optimized performance
});

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  palette: {
    mode: "light",

    primary: {
      main: primary,
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#fff",
    },
    secondary: {
      main: secondary,
      light: "#ff5c8d",
      dark: "#9a0036",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "transparent",
      paper: "transparent",
    },
    text: {
      primary: "#333",
      secondary: "#666",
    },
  },
  typography: {
    fontFamily: `${roboto.style.fontFamily}, ${dmSans.style.fontFamily}, ${lato.style.fontFamily}, sans-serif`,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: ".9rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
    },
  },
  spacing: 8, // Default spacing unit is 8px
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 16px",
          marginRight: "8px",
          marginBottom: "8px",
        },
        containedPrimary: {
          backgroundColor: "#1976d2",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: "#fff",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "16px", // Add global margin bottom for all TextField components
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: "16px", // Add global margin bottom for all FormControl components
        },
      },
    },
  },
});
export default theme;
