import React, { useContext, useState } from "react";
// import users from "./../../data/users";
// import image from "./Images/image.jpg";
import {Avatar,Button,CssBaseline,TextField,FormControlLabel, Checkbox,Link,Paper,Box,Typography,Grid } from "@mui/material";
import authService from "./../service/authService";
import IsActiveLogIn from "../contexts/IsActiveLogIn";
import { login } from "../apis/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


export default function LogInSide({history}) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  if(authService.isLoggedIn()){

    history.push("./home");

  }

  const {isActiveLogIn, setIsActiveLogIn} = useContext(IsActiveLogIn);


  const handleLogin = () => {
    const token = login(username, password);
    console.log('token', token)
    if (token){
        localStorage.setItem('token', JSON.stringify(token));
        setIsActiveLogIn(false);
    } else {
        localStorage.removeItem('token');
        setIsActiveLogIn(true);
    }
  };

  return (
    <Grid container component="main"
    style={
        isActiveLogIn ? { display: "block" } : { display: "none" }
    }
    >
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={1}
        square
      >
        <div >
          <Avatar>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
            <TextField
            onChange={(event)=> setUsername(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
            onChange={(event)=> setPassword(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick = {handleLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
    </Grid>
  );
}
