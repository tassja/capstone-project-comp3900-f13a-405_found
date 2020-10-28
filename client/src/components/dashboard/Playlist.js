import React, { useEffect } from "react";
import { getPlaylist } from "../../actions/playlist";
import Sidebar from "./Sidebar";
import Trending from "./Trending";

import {
    makeStyles,
    CssBaseline,
    unstable_createMuiStrictModeTheme as createMuiTheme,
    ThemeProvider,
  } from "@material-ui/core";
  import Header from "./Header";
  import Player from "../player/player"
  import { getSubscriptions } from "../../actions/subscriptions";
  import { useDispatch } from "react-redux";
  import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";


const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#333996",
        light: "#3c44b126",
      },
      secondary: {
        main: "#f83245",
        light: "#f8324526",
      },
      background: {
        default: "#f4f5fd",
      },
    },
});

const useStyles = makeStyles({
    appMain: {
      paddingLeft: "160px",
      width: "100%",
      paddingTop: "10px",
    },
});

const Playlist = () => {
    let match = useRouteMatch();
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
      dispatch(getPlaylist()); // getSubscriptions() works. Start bug fixing from here. 
    }, [dispatch]);
    return (
  
        <ThemeProvider theme={theme}>
        <Player/>
        <Sidebar />
        <div className={classes.appMain}>
          <Switch>
            <Route exact path={match.path} component={Header} />
            <Route exact path={`${match.path}/trending`} component={Trending} />
            {/* this is just to redirect to 404 */}
            <Route
              render={({ location }) => (
                <Redirect
                  to={{
                    pathname: "/404",
                    state: { originalUrl: location.pathname },
                  }}
                />
              )}
            />
          </Switch>
        </div>
        <CssBaseline />
      </ThemeProvider>
      
    );
};



export default Playlist;

