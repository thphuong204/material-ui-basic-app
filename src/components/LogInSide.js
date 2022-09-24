import React, { useContext, useState } from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Typography, Grid } from "@mui/material";
import IsShowingLogInModal from "../contexts/IsShowingLogInModal";
import { login } from "../apis/auth";


export default function LogInSide({ history }) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { isShowingLogInModal, setIsShowingLogInModal } = useContext(IsShowingLogInModal);


  const handleLogin = () => {
    const token = login(username, password);
    console.log('token', token)
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      setIsShowingLogInModal(false);
    } else {
      localStorage.removeItem('token');
      setIsShowingLogInModal(true);
    }
  };

  return (
    <Grid container component="main"
      style={
        isShowingLogInModal ? { display: "flex", justifyContent: "center" } : { display: "none" }
      }
      sx={{
        zIndex: "10",
        position: "fixed",
        top: "20%",
        width: "70%",
        minWidth: "200px",
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
          paddingX: "20px",
          borderRadius: "10px"
        }}
      >
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
        }}>

          <Avatar sx={{
            marginTop: "10px",
          }} />
          <Typography
            component="h1"
            width="100%"
            textAlign="center"
            color="#ffffff"
            fontSize="18px"
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
            sx={{
              "& MuiOutlinedInput": {
                backgroundColor: "#fff",
              }
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" style={{ color: "#fff" }} />}
            style={{ color: "#fff", height: "30px", border: "none" }}
            label="Remember me"
          />
          <Button
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
            sx={{ paddingY: "3px" }}
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
              <Link href="#" fontSize="14px" color="#fff" >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
