/** @jsxImportSource theme-ui */

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {} from "@theme-ui/core";
import { makeTheme } from "@theme-ui/css/utils";

const theme = makeTheme({
  shadows: {
    firstLevel: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
});

type MyTheme = typeof theme;

declare module "@theme-ui/core" {
  export interface UserThemes {
    $: MyTheme;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div
          sx={{
            boxShadow: (theme) => theme.shadows?.[1],
          }}
        />
        <div
          sx={({ shadows }) => ({
            boxShadow: shadows.firstLevel,
          })}
        />
      </header>
    </div>
  );
}

export default App;
