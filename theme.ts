import { extendTheme } from "@chakra-ui/react";

const colors = {
  brandBlue: {
    100: "#d4f5f3",
    200: "#a9ebe7",
    300: "#7fe2dc",
    400: "#54d8d0",
    500: "#29cec4",
    600: "#21a59d",
    700: "#197c76",
    800: "#10524e",
    900: "#082927",
  },
  brandOrange: {
    100: "#fee8dc",
    200: "#fdd1ba",
    300: "#fdba97",
    400: "#fca375",
    500: "#fb8c52",
    600: "#c97042",
    700: "#975431",
    800: "#643821",
    900: "#321c10",
  },
  accentBlue: {
    100: "#d7e4f3",
    200: "#afc9e8",
    300: "#88addc",
    400: "#6092d1",
    500: "#3877c5",
    600: "#2d5f9e",
    700: "#224776",
    800: "#16304f",
    900: "#0b1827",
  },
  accentYellow: {
    100: "#fff8d7",
    200: "#fef1b0",
    300: "#fee988",
    400: "#fde261",
    500: "#fddb39",
    600: "#caaf2e",
    700: "#988322",
    800: "#655817",
    900: "#332c0b",
  },
  accentSand: {
    100: "#f8f5f1",
    200: "#f0ebe3",
    300: "#e9e0d6",
    400: "#e1d6c8",
    500: "#daccba",
    600: "#aea395",
    700: "#837a70",
    800: "#57524a",
    900: "#2c2925",
  },
};
export const theme = extendTheme({
  fonts: {
    heading: "Gabarito, sans-serif",
    body: "Gabarito, sans-serif",
  },
  styles: {
    global: {
      html: {
        fontSize: "16px",
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        w: "full",
        textAlign: "justify",
      },
    },
    Button: {
      defaultProps: {
        variant: "secondary",
      },
      variants: {
        primary: {
          bg: "brandBlue.600",
          color: "white",
          _hover: {
            bg: "brandBlue.700",
            color: "white",
          },
        },
        nav: {
          borderWidth: 0,
          borderRadius: 0,
          px: 3,
          _active: {
            fontWeight: 800,
            bg: "borderColor",
            color: "white",
          },
        },
        secondary: {
          color: "accentSand.800",
          borderColor: "accentSand.800",
          borderWidth: 3,
          _hover: {
            bg: "accentSand.800",
            color: "white",
            borderColor: "accentSand.800",
            _disabled: {
              color: "accentSand.800",
              opacity: 0.6,
            },
          },
        },
        light: {
          bg: "white",
          color: "accentBlue.800",
          _hover: {
            bg: "accentBlue.800",
            color: "white",
          },
        },
      },
    },
  },
  colors: {
    ...colors,
    borderColor: colors.accentBlue[700], // accent
  },
});
