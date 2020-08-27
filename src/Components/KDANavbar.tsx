import React from "react";
import { Paper, IconButton, InputBase, AppBar, Grid } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';

export class KDANavbar extends React.Component {
  render() {
    return (
      <AppBar position="relative" color="default">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper component="form" className="root">
              <IconButton className="iconButton" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <img src="https://www.k-state.edu/ksu-resources/branding/2/images/innovation-inspiration-215.png" placeholder="Logo Here" />
              <InputBase
                className="input"
                placeholder="Find Your Product"
                inputProps={{ "aria-label": "Find Your Product" }}
              />
              <IconButton
                type="submit"
                className="iconButton"
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}
