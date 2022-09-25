import React, { useContext, useState } from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Typography, Grid, Modal } from "@mui/material";
import IsShowingLogInModal from "../contexts/IsShowingLogInModal";
import { login } from "../apis/auth";
import IsLoggedInContext from "../contexts/IsLoggedInContext";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
  backgroundColor:"primary.main"
};

export default function LogInSide({ history }) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { isShowingLogInModal, setIsShowingLogInModal } = useContext(IsShowingLogInModal);

  const { loggedIn, setLoggedIn } = useContext(IsLoggedInContext);


  const handleLogin = () => {
    const token = login(username, password);
    console.log('token', token)
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      setIsShowingLogInModal(false);
      setLoggedIn(true);
    } else {
      localStorage.removeItem('token');
      setIsShowingLogInModal(true);
      setLoggedIn(false);
    }
  };

  const handleClose = () => {
    setIsShowingLogInModal(false);
  };

  return (
    <Modal
      open={isShowingLogInModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container component="main"
        
        sx={style}
      >
        <CssBaseline />

      
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
              textAlign="center"
              color="#ffffff"
              fontSize="18px"
              width="100%"
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
    </Modal>
  );
}
