import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" style={{
      backgroundColor:"lightblue"
    }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          React App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
