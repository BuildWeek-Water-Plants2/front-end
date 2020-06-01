import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UserProfile = () => {
  /* State Management */
  const classes = useStyles();

  const [UpdateUserState, setUpdateUserState] = useState({
    username: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setUpdateUserState({ ...UpdateUserState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://preston-plant.herokuapp.com/api/", UpdateUserState)
      .then((res) => {
        console.log("res: ", res);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("phoneNumber", res.data.phoneNumber);
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <div>
      <div className="Signin-form">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" color="inherit">
              Sign up for water my plants!
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={UpdateUserState.username}
                onChange={handleChange}
                color="inherit"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={UpdateUserState.password}
                onChange={handleChange}
                color="inherit"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="phoneNumber"
                label="Phone number"
                type="phoneNumber"
                id="phoneNumber"
                autoComplete="phonenumber"
                value={UpdateUserState.phoneNumber}
                onChange={handleChange}
                color="inherit"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign up
              </Button>
              <Grid container>
                <Link href="/Login" variant="body2">
                  {"Back to login"}
                </Link>
              </Grid>
            </form>
          </div>
          <Box mt={8}></Box>
        </Container>
      </div>
      ); }
    </div>
  );
};

export default UserProfile;
