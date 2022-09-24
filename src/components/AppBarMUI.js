import React, { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import IsActiveLogIn from '../contexts/IsShowingLogInModal';

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

    const { isActiveLogIn,setIsActiveLogIn } = useContext(IsActiveLogIn);
    return (
        // <Box sx={{ width: "100%", zIndex: "1" }} >
        <AppBar sx={{ width: "100%", mb: { xs: 3, sm: 3, md: 5 }, position: "relative" }} >
            <Toolbar sx={{ justifyContent: "center" }} >
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        textAlign: "right",
                        fontWeight: "bold",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        marginRight: "10px"
                    }}
                >
                    Job Routing
                </Typography>
                <Search style={{ width: "150px" }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { md: 'flex' } }}>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="show login"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={(e) => setIsActiveLogIn(true)}
                    >
                        <LoginIcon sx={{ mx: 1 }} />
                        <Typography
                            color="inherit"
                            sx={{ fontWeight: "bold" }}
                        >
                          {isActiveLogIn? "Log out" : "Sign in"}  
                        </Typography>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        // </Box>
    );
}
