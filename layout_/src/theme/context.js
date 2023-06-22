import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, useMemo } from "react";
import { useState } from "react";

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#004594",
        light: "#00459480",
      },
      bg: {
        bgOutlet: "#e0e0e01c",
        bgCards: "#ffffff",
      },
      secondary: {
        main: "#ff3a00",
      },

      iinfo: {
        main: "#008dde",
      },

      warning: {
        main: "#ffb000",
      },

      error: {
        main: "#ff0000",
      },

      success: {
        main: "#00a500",
      },

      disabled: {
        main: "#97b3d3",
      },
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
