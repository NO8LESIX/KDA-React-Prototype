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
  Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import UpdateIcon from "@material-ui/icons/Update";
import ReportIcon from "@material-ui/icons/Report";
import StarsIcon from '@material-ui/icons/Stars';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


type Anchor = "top" | "left" | "bottom" | "right";

interface KDANavbarState {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
  drawerOpen: boolean;
}

enum KDADrawerRoutes {
  "Home" = "/",
  "Updates" = "/updates",
  "Report Violations"= "/report",
  "Favorites" = "/"
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
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  };

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

    onClick = (index: number) =>{

      console.log("is this even being called");
      console.log("index: ", index);
        switch (index) {
            case 0:
                return <a href="/search"></a>;
            default:
                break;
        }
    };

    onSubmitSearch = (event: any) => {
      event.preventDefault();
      console.log("submitted");
      window.location.href ='/search';
      return <a href="/search"></a>;
    }

  menuDrawerIconSelection = (text: string) => {
    switch (text) {
      case "Home":
        return <InboxIcon />;
      case "Updates":
        return <UpdateIcon />;
      case "Report Violations":
        return <ReportIcon />;
      case "Favorites":
        return <StarsIcon />;
      default:
        return <MailIcon />;
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
        {Object.entries(KDADrawerRoutes).map(
          ([key, value]) => (
            <ListItem button component="a" key={key} href={value}>
                <ListItemIcon>
                  {this.menuDrawerIconSelection(key)}
                </ListItemIcon>
                <ListItemText primary={key} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  render() {
    return (
      <>
        <AppBar position="static" color="default" className="NavbarGradient">
          <br />
          <Toolbar>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-around"
              spacing={1}
            >
              <Grid item xs={12} sm ={1} md lg xl>
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
              <Grid
                item
                xs={12}
                sm = {11}
                md = {6}
                lg
                xl
                className="centerIcon"
              >
                <a href="/" className="logo">
                  <img
                    src="https://www.communications.k-state.edu/communications-solutions-and-services/logos/KSRE_textonly_REVERSE_CORRECT.png"
                    placeholder="Logo Here"
                    alt="Kansas Department of Agriculture Food Regulations"
                    className="navbarLogo"
                  />
                </a>
              </Grid>
            <Grid item xs={12} sm={12} md={5} lg xl className="search">
              <Paper component="form" className="searchPaper" onSubmit={this.onSubmitSearch}>
                <InputBase
                placeholder="Search Products"
                inputProps={{ 'aria-label': 'search products' }}
                color="primary"
                className="searchInput"
                onSubmit={this.onSubmitSearch}
                />
                <IconButton type="submit" aria-label="search" onClick={this.onSubmitSearch}>
                  <SearchIcon />
                </IconButton>    
              </Paper>
            </Grid>
            </Grid>
          </Toolbar>
          <br />
        </AppBar>
      </>
    );
  }
}
