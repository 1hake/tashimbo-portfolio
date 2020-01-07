import React from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    height: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column"
  },
  container: {
    backgroundColor: "white",
    height: "90vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    width: "100%"
  }
});

function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.container}>{props.children}</div>
    </div>
  );
}

export default Layout;
