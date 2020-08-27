import React from "react";
import clsx from "clsx";
import {
  IconButton,
  InputBase,
  AppBar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Container,
  Toolbar,
  Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

type Anchor = "top" | "left" | "bottom" | "right";

interface KDANavbarState {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
  drawerOpen: boolean;
}

interface KDANavbarProps {}

export default class KDANavbar extends React.Component<
  KDANavbarProps,
  KDANavbarState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
      drawerOpen: false,
    };
  }

  toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    this.setState({ ...this.state, drawerOpen: open });
  };

  list = (anchor: Anchor) => (
    <div
      className={clsx(this.list, {
        fullList: anchor === "top",
      })}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Updates", "Report Violations", "Settings"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Container>
            <React.Fragment key="left">
              <IconButton
                onClick={this.toggleDrawer("left", true)}
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon></MenuIcon>
              </IconButton>
              <SwipeableDrawer
                anchor="left"
                open={this.state.drawerOpen}
                onClose={this.toggleDrawer("left", false)}
                onOpen={this.toggleDrawer("left", true)}
              >
                {this.list("left")}
              </SwipeableDrawer>
            </React.Fragment>
          </Container>
          <Container>
            <img
              src="https://www.k-state.edu/ksu-resources/branding/2/images/innovation-inspiration-215.png"
              placeholder="Logo Here"
            />
          </Container>
          <Container>
            <Paper>
              <InputBase
                className="input"
                placeholder="Find Your Product"
                inputProps={{ "aria-label": "search" }}
              />
              <>
                <IconButton
                  type="submit"
                  className="iconButton"
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </>
            </Paper>
          </Container>
        </Toolbar>
      </AppBar>
    );
  }
}
