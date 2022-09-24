import React, { useContext, useState } from "react";
// import users from "./../../data/users";
// import image from "./Images/image.jpg";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Typography, Grid } from "@mui/material";
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


export default function LogInSide({ history }) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { isActiveLogIn, setIsActiveLogIn } = useContext(IsActiveLogIn);


  const handleLogin = () => {
    const token = login(username, password);
    console.log('token', token)
    if (token) {
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
        isActiveLogIn ? { display: "flex", justifyContent: "center" } : { display: "none" }
      }
      sx={{
        zIndex: "10",
        position: "fixed",
        top: "20%",
      }}
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
        sx={{
          backgroundColor: "primary.main",
          width: "50%",
          minWidth: "400px",
          paddingX: "10px",
        }}
      >
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
        }}>

          <Avatar sx={{
            marginY: "10px",
          }} />
          <Typography
            component="h1"
            variant="h5"
            width="100%"
            textAlign="center"
            color="#ffffff"
            fontWeight="bold">
            Log in
          </Typography>
          <TextField
            onChange={(event) => setUsername(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
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
            control={<Checkbox value="remember" style={{ color: "#fff" }} />}
            style={{ color: "#fff" }}
            label="Remember me"
          />
          <Button
            style={{
              fontWeight: "bold",
              fontSize: "18px",
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="warning"
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item marginY="10px">
              <Link href="#" fontSize="16px" color="#fff" >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
