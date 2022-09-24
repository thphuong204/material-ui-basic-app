import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Divider, Stack, Grid } from '@mui/material';
import { Box } from '@mui/system';
import data from '../apis/mock-data/jobListing.json';
import { useSearchParams } from 'react-router-dom';
import SetSelectedJobContext from '../contexts/SetSelectedJobContext';
import { isLoggedIn } from '../apis/auth';
import IsActiveLogIn from '../contexts/IsActiveLogIn';
import IsActiveDetailJobCard from '../contexts/IsActiveDetailJobCard';

const fetchPageArrayData = (page) => {
    const size = 5;
    return data.slice((page - 1) * size, page * size);
}
// filter(item => item.title.contains(query) || item.description.contains(query))

const JobCardsList = ({ }) => {
    const [searchParams] = useSearchParams();

    const page = searchParams.get("page") || 1;
    const pageArrayData = fetchPageArrayData(page);

    const setSelectedJobId = useContext(SetSelectedJobContext);
    const {setIsActiveDetailJobCard} = useContext(IsActiveDetailJobCard);
    const { isActiveLogIn, setIsActiveLogIn } = useContext(IsActiveLogIn);

    const onLearnMoreClick = (setSelectedJobId) => {
        if (!isLoggedIn()) {
            setIsActiveLogIn(true); //isShowingLoginPopup
            setIsActiveDetailJobCard(false)
            return (jobId) => setSelectedJobId(null);
        } else {
            setIsActiveDetailJobCard(true)
            return (jobId) => setSelectedJobId(jobId);
        }
    }

    return (
        <>
            <Grid
                container
                spacing={{ xs: 2, sm: 3, md: 5 }}
                columns={{ xs: 12, sm: 4, md: 4 }}
                sx={{ justifyContent: "center" }}
                width={{ xs: "400px", md: "700px", lg: "1100px" }}
            >
                {pageArrayData.map((jobObject) => {
                    return (
                        <Grid item key={jobObject.id}>
                            <JobCardMUI
                                jobObject={jobObject}
                                skillsList={jobObject.skills.slice(0, 4)}
                                onLearnMoreClick={() => onLearnMoreClick(setSelectedJobId)}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}


export function JobCardMUI({ jobObject, skillsList, onLearnMoreClick, onToggleActive }) {

    return (
        <Card sx={{
            backgroundColor: "primary.light",
            zIndex: "2",
            position: "relative",
            width: { xs: "250px", md: "300px", lg: "300px" },
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
                        flexWrap: "wrap",
                        my: 1,
                        height: "48px",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {skillsList.map((skill) => {
                        return (
                            <Chip
                                key={skill}
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
                                    marginRight: "8px",
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
                    id={jobObject.id}
                    onClick={() => {
                        onLearnMoreClick(jobObject.id)
                    }}
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
    );
}

export default JobCardsList;