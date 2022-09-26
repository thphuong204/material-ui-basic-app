import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey, orange, red } from '@mui/material/colors';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppBarMUI from './components/AppBarMUI';
import PaginationLink from './components/PaginationLink';
import SelectedJobContext from './contexts/SelectedJobContext';
import IsActiveDetailJobCard from './contexts/IsActiveDetailJobCard';
import IsShowingLogInModal from './contexts/IsShowingLogInModal';
import DetailJobCard from './components/DetailJobCard';
import LogInSide from './components/LogInSide';
import IsLoggedInContext from './contexts/IsLoggedInContext';

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
          border: "1px solid white",
          borderRadius: "5px",
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
  const [isShowingLogInModal, setIsShowingLogInModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <div
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}
        >
          <IsLoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
            <SelectedJobContext.Provider value={{ selectedJobId, setSelectedJobId }}>
              <IsActiveDetailJobCard.Provider value={{ isActiveDetailJobCard, setIsActiveDetailJobCard }}>
                <IsShowingLogInModal.Provider value={{ isShowingLogInModal, setIsShowingLogInModal }}>
                  <DetailJobCard />
                  <LogInSide />
                  <AppBarMUI />
                  <div
                    style={{ display: "flex", justifyContent: "center", width: "100%" }}
                  >
                    <Outlet />
                  </div>
                  <PaginationLink />
                </IsShowingLogInModal.Provider>
              </IsActiveDetailJobCard.Provider>
            </SelectedJobContext.Provider>
          </IsLoggedInContext.Provider>
        </div >
      </ThemeProvider>
    </div>
  );
}

export default App;
