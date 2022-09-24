import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey, orange, red } from '@mui/material/colors';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppBarMUI from './components/AppBarMUI';
import PaginationLink from './components/PaginationLink';
import SelectedJobContext from './contexts/SelectedJobContext';
import SetSelectedJobContext from './contexts/SetSelectedJobContext';
import IsActiveDetailJobCard from './contexts/IsActiveDetailJobCard';
import IsActiveLogIn from './contexts/IsActiveLogIn';
import DetailJobCard from './components/DetailJobCard';
import LogInSide from './components/LogInSide';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
      light: grey[700],
      dark: grey[900],
    },
    secondary: {
      main: red[400],
      light: red[300],
      dark: red[800],
    },
    warning: {
      main: orange[400]
    },
    background: {
      default: grey[900],
    },
    spacing: { xs: 2, sm: 3, md: 5 },
  },
  components: {
    // Name of the component
    MuiPaginationItem: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: 'white',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "10px",
          paddingTop: "0px",
          height: "40px",
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "20px",
          fontWeight: "bold",
          zIndex: "12"
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none"
        },
        input: {
          // marginTop: "10px",
          paddingY: "0",
          height: "20px",
          zIndex: "11"
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "30px",
        }
      }
    }
  },
})

function App() {
  const [selectedJobId, setSelectedJobId] = useState("_cx62grqgd");
  const [isActiveDetailJobCard, setIsActiveDetailJobCard] = useState(false);
  const [isActiveLogIn, setIsActiveLogIn] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <div
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}

          onClickCapture={() => {
            console.log("div clicking", isActiveDetailJobCard)
            setIsActiveDetailJobCard(false)
          }}
        >
          <SelectedJobContext.Provider value={selectedJobId}>
            <SetSelectedJobContext.Provider value={setSelectedJobId}>
              <IsActiveDetailJobCard.Provider value={{ isActiveDetailJobCard, setIsActiveDetailJobCard }}>
                <IsActiveLogIn.Provider value={{ isActiveLogIn, setIsActiveLogIn }}>
                  <DetailJobCard />
                  <LogInSide />
                  <AppBarMUI />
                  <div
                    style={{ display: "flex", justifyContent: "center", width: "100%" }}
                  >
                    <Outlet />
                  </div>
                  <PaginationLink />
                </IsActiveLogIn.Provider>
              </IsActiveDetailJobCard.Provider>
            </SetSelectedJobContext.Provider>
          </SelectedJobContext.Provider>
        </div >
      </ThemeProvider>
    </div>
  );
}

export default App;
