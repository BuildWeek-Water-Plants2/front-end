import React from "react";
import { useHistory } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import "./Home.css";

const images = [
  {
    url:
      "/static/images/grid-list/https://images.pexels.com/photos/1645226/pexels-photo-1645226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Plant",
    width: "40%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 300,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },

  textStyled: {
    Color: "",
  },
}));

const Home = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div onClick={() => history.push("./Login")}>
      <React.Fragment>
        <CssBaseline />
        <br></br>
        <Container maxWidth="">
          <Typography component="div" variant="h3" colorPrimary>
            Welcome To All Plants Watered
          </Typography>
        </Container>
        <br></br>
        <br></br> <br></br>
        <br></br> <br></br>
        <br></br>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/1645226/pexels-photo-1645226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                Click Here To Get Started
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
        <br></br>
        <br></br>
        <br></br>
        <Typography component="div" variant="h3" colorPrimary>
          Never Forget To Water A Plant Again
        </Typography>
      </React.Fragment>
    </div>
  );
};

export default Home;
