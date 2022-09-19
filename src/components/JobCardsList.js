import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, createTheme, Divider, Stack, ThemeProvider, Grid } from '@mui/material';
import { grey, orange, red } from '@mui/material/colors';
import { Box } from '@mui/system';
import { CartContext } from '../App';

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

const JobCardsList = () => {
    const pageArrayData = useContext(CartContext);
    console.log("jobcard array data", pageArrayData);

    return (
        <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 5 }}
            columns={{ xs: 12, sm: 4, md: 4 }}
            sx={{ justifyContent: "center" }}
            width={{ xs: "400px", md: "600px", lg: "1100px" }}
        >
            {pageArrayData.map((jobObject) => {
                return (
                    <Grid item key={jobObject.id}>
                        <JobCardMUI jobObject={jobObject} />
                    </Grid>
                )
            })}
        </Grid>
    )
}


export function JobCardMUI({ jobObject }) {

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{
                backgroundColor: "primary.main",
                width: { xs: "300px", md: "300px", lg: "300px" },
            }}
            >
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            color: "white",
                            fontWeight: "bold",
                            my: 1,
                            textAlign: "center",
                            height: "64px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {jobObject.title}
                    </Typography>
                    <Divider variant="middle" color="white" sx={{ my: 1 }} />
                    <Stack
                        direction="row"
                        spacing={1}
                        columns={{ xs: 6, md: 4 }}
                        sx={{
                            justifyContent: "space-around",
                            flexWrap: "wrap",
                            my: 1,
                            height: "48px",
                        }}
                    >
                        {jobObject.skills.map((skill) => {
                            return (
                                <Chip key={skill}
                                    label={
                                        <Box sx={{
                                            whiteSpace: "normal",
                                            wordWrap: "break-word",
                                        }}>
                                            {skill}
                                        </Box>}
                                    color="secondary"
                                    size="small"
                                    style={{
                                        marginBottom: "8px",
                                        marginLeft: "0",
                                        maxWidth: "100px",
                                        height: "24px",
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: "8px",
                                        borderRadius: "10px",
                                    }}
                                />
                            )
                        })}


                    </Stack>
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: "12px",
                            my: 1,
                            textAlign: "justify",
                            height: "72px",
                            overflow: "auto",
                        }}
                    >
                        {jobObject.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                        size="small"
                        sx={{
                            backgroundColor: "orange",
                            fontWeight: "bold",
                            borderRadius: "5px",
                            color: "black",
                            marginBottom: "10px"
                        }}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </ThemeProvider >
    );
}

export default JobCardsList;