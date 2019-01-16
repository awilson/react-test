import React from "react";
import ReactDOM from "react-dom";
import ContainedButtons from "./buttons";
import PaperSheet from "./PaperSheet";
import AutoGrid from "./AutoGrid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({ typography: { useNextVariants: true } });

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/*<ContainedButtons />*/}

    <AutoGrid />
  </ThemeProvider>,
  document.querySelector("#root")
);
