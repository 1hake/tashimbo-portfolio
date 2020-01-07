import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <Link className={classes.link} to="/about">
          <img
            className={classes.img}
            src={require("../assets/img/tash.png")}
            alt=""
          />
        </Link>
      </div>
      <div className={classes.menu}>
        <Link className={classes.link} to="/about">
          About
        </Link>
        <Link className={classes.link} to="/galerie">
          Gallery
        </Link>
        <Link className={classes.link} to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "10vh",
    position: "sticky",
    backgroundColor: "white",
    color: "black",
    width: "100%",

    fontSize: "1em",
    fontFamily: "Barlow",
    fontWeight: "bold"
  },
  img: {
    width: "25vw"
  },
  link: {
    textDecoration: "none!important",
    color: "black",
    marginRight: "15px"
  },
  logo: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  menu: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

export default Header;
