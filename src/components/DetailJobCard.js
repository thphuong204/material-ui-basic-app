import { Box, Card, CardContent, Chip, Divider, Stack, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import SelectedJobContext from '../contexts/SelectedJobContext';
import data from '../data.json';

export function DetailJobCard() {


    const selectedJobId = useContext(SelectedJobContext);
    console.log('selectedJobId', selectedJobId)
    const selectedJob = data.find(item => item.id === selectedJobId);
    console.log('selectedJob', selectedJob);

    return (
        <Card sx={{
            backgroundColor: "primary.main",
            width: { xs: "250px", md: "300px", lg: "300px" },
            zIndex: "5",
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
                    {selectedJob.title}
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
                    {selectedJob.skills?.slice(0, 4).map((skill) => {
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
                    {selectedJob.description}
                </Typography>
            </CardContent>

        </Card>
    );
}
