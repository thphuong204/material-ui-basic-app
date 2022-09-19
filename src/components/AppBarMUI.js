import * as React from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import { grey, orange, red } from '@mui/material/colors';


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
    }
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.common.white,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.35),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function AppBarMUI() {


    return (
        <Box sx={{ flexGrow: 1 }} >
            <ThemeProvider theme={theme} >
                <AppBar position="relative" sx={{ mb: { xs: 3, sm: 3, md: 5 } }} >
                    <Toolbar sx={{ justifyContent: "center" }} >
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1, textAlign: "right", fontWeight: "bold" }}
                        >
                            Job Routing
                        </Typography>
                        <Search
                            sx={{ flexGrow: 1 }}
                        >
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 2 }} />
                        <Box sx={{ display: { md: 'flex' }, flexGrow: 1 }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="show login"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <LoginIcon sx={{ mx: 1 }} />
                                <Typography
                                    color="inherit"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Sign in
                                </Typography>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}
