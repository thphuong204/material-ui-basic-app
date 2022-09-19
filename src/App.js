
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { grey, orange, red } from '@mui/material/colors';
import React, { useState, createContext } from 'react';
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
  let pageArrayData = [];
  const size = 5;
  if (currentPage >= 2) {
    pageArrayData = data.slice(
      (currentPage - 1) * size, currentPage * size
    );
  } else {
    pageArrayData = data.slice(0, currentPage * size)
  }

  return (
    <CartContext.Provider value={pageArrayData}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <div>
          <AppBarMUI />
          <div
            style={{ display: "flex", justifyContent: "center", }}
          >
            <JobCardsList />
          </div>
          <PaginationLink />
        </div >
      </ThemeProvider>
    </CartContext.Provider>
  );
}

export default App;
