
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey, orange, red } from '@mui/material/colors';
import React, { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import AppBarMUI from './components/AppBarMUI';
import JobCardsList from './components/JobCardsList';
import PaginationLink from './components/PaginationLink';
import data from './data.json';

export const CartContext = createContext();

const theme = createTheme({
  palette: {
    primary: {
      main: grey[700],
      light: grey[500],
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
  },
})


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageArrayData, setPageArrayData] = useState(data.slice(0, 5));

  console.log(pageArrayData);

  const [result, setResult] = useState("");
  const handleDetailJobCardClick = (e) => {
    console.log("e", e)
    setResult(data.filter((jobObject) => (e.target.id === jobObject.id)))
    console.log("result", result);
  }

  console.log("length", data.length);

  return (
    <CartContext.Provider value={pageArrayData}>
      {/* <CartContext.Provider value={result}> */}
      {/* <CartContext.Provider value={handleDetailJobCardClick}> */}
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <div>
            <AppBarMUI />
            <div
              style={{ display: "flex", justifyContent: "center", }}
            >
              <Outlet />
            </div>
            <PaginationLink />
          </div >
          {result}
        </ThemeProvider>
      </div>
      {/* </CartContext.Provider> */}
      {/* </CartContext.Provider> */}
    </CartContext.Provider>
  );
}

export default App;
