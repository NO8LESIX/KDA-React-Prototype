import React from "react";
import clsx from "clsx";
import "../CSS/KDANavbar.css";
import {
  IconButton,
  AppBar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import UpdateIcon from "@material-ui/icons/Update";
import ReportIcon from "@material-ui/icons/Report";
import StarsIcon from '@material-ui/icons/Stars';
import { Input } from "antd";
const { Search } = Input;

type Anchor = "top" | "left" | "bottom" | "right";

interface KDANavbarState {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
  drawerOpen: boolean;
}

interface KDANavbarProps {}

export default class KDANavbar extends React.Component<KDANavbarProps, KDANavbarState> {
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

  menuDrawerIconSelection = (index: number) => {
    switch (index) {
      case 0:
        return <InboxIcon />;
      case 1:
        return <UpdateIcon />;
      case 2:
        return <ReportIcon />;
      case 3:
        return <StarsIcon />;
      default:
        return <MailIcon />;
    }
  };

  menuRouteBuilder = (route: string) => {
    switch (route) {
      case "Home":
        return <a href="/">{route}</a>;
      case "Updates":
        return <a href="/updates">{route}</a>;
      case "Report Violations":
        return <a href="/report">{route}</a>;
      case "Favorites":
        return <a href="/">{route}</a>;
      default:
        break;
    }
  };

  menuDrawer = (anchor: Anchor) => (
    <div
      className={clsx(this.menuDrawer, {
        fullList: anchor === "top",
      })}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Updates", "Report Violations", "Favorites"].map(
          (text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>
                  {this.menuDrawerIconSelection(index)}
                </ListItemIcon>
                <ListItemText primary={this.menuRouteBuilder(text)} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  render() {
    return (
      <AppBar position="static" color="default" className="NavbarGradient">
        <Toolbar>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
            spacing={1}

          >
            <Grid item xs={12} md lg xl>
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
                  {this.menuDrawer("left")}
                </SwipeableDrawer>
              </React.Fragment>
            </Grid>
            <Grid item xs={12} md lg xl justify="center" alignContent="center" >
              <a href="/">
                <img
                  src="https://www.communications.k-state.edu/communications-solutions-and-services/logos/KSRE_textonly_REVERSE_CORRECT.png"
                  placeholder="Logo Here"
                  alt="Kansas Department of Agriculture Food Regulations"
                  className = "navbarLogo"
                />
              </a>
            </Grid>
            <Grid item xs={12} md lg xl>
              <Search
                placeholder="Search"
                onSearch={(value) => console.log(value)}
                enterButton
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
