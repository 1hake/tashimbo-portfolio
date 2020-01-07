import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WhiteSpace from "../shared/WhiteSpace";
import { introText } from "../data/about-data";

function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        className={classes.img}
        src={require("../assets/img/portrait.jpeg")}
        alt=""
      />
      <WhiteSpace />
      <h1 className={classes.text}>{introText}</h1>
    </div>
  );
}

const useStyles = makeStyles({
  text: {
    fontSize: "1em",
    fontFamily: "Barlow",
    fontWeight: "bold",
    color: "black",
    margin: "30px"
  },
  img: {
    height: "50vh"
  },
  container: {
    margin: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "90vh"
  }
});

export default About;
