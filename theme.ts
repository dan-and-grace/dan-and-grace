import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Gabarito, sans-serif",
    body: "Gabarito, sans-serif",
  },
  colors: {
    brand: {
      100: "#ffe5d9",
      200: "#ffcbb4",
      300: "#ffb28f",
      400: "#f77d49",
      500: "#ee6123",
      600: "#c35120",
      700: "#dd2e00",
      800: "#99421c",
      900: "#723318",
    },
    green: {
      500: "#00916e",
    },
  },
});
