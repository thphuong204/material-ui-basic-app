import React from "react";
// import users from "./../../data/users";
// import image from "./Images/image.jpg";
import {Avatar,Button,CssBaseline,TextField,FormControlLabel, Checkbox,Link,Paper,Box,Typography,Grid, makeStyles } from "@mui/material";
import authService from "./../service/authService";

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


export default function LogInSide(props) {
  const users = [

    {username:"ankur", password:"123456", type:"buyer"},
    {username:"Soap_McTive", password:"23449$#@!",type:"seller"}
    
    ];

  if(authService.isLoggedIn()){

    props.history.push("./home");

  }



  const [account, setAccount] = React.useState({username:"",password:""});

  const handelAccount = (property,event)=>{

    const accountCopy = {...account};
    accountCopy[property] = event.target.value;

    setAccount(accountCopy);

  }

  const isVarifiedUser=(username, password)=>{

    return users.find((user)=> user.username === username && user.password === password);

  };


  const handelLogin = ()=>{
      if(isVarifiedUser(account.username,account.password)){
        authService.doLogIn(account.username);
        setAccount({username:"",password:""});
        props.history.push("/home");

      }
  };

  return (
    <Grid container component="main">
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
          <form  noValidate>
            <TextField
            onChange={(event)=>handelAccount("username",event)}
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
            onChange={(event)=>handelAccount("password",event)}
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
              onClick = {handelLogin}
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
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
