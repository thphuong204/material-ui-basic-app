import { Box, Chip, Divider, Stack, Typography, Modal, Button } from '@mui/material';
import React, { useContext } from 'react';
import SelectedJobContext from '../contexts/SelectedJobContext';
import IsActiveDetailJobCard from '../contexts/IsActiveDetailJobCard';
import data from '../apis/mock-data/jobListing.json';

const DetailJobCard = () => {
    const { isActiveDetailJobCard, setIsActiveDetaiJobCard } = useContext(IsActiveDetailJobCard);
    const { selectedJobId } = useContext(SelectedJobContext);
    const selectedJob = data.find(item => item.id === selectedJobId);

    const handleClose = () => {
        setIsActiveDetaiJobCard(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    if (true) {
        return (
            <div>
                <Modal
                    open={isActiveDetailJobCard}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        )
    }

    return (
        <Box
            style={
                isActiveDetailJobCard ? { display: "block" } : { display: "none" }
            }
            sx={{
                backgroundColor: "primary.main",
                width: "50%",
                minWidth: "400px",
                zIndex: "10",
                position: "fixed",
                top: "20%",
                height: "300px",
                paddingX: "20px"

            }}
        >
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
            <Typography
                sx={{
                    color: "white",
                    fontSize: "16px",
                    my: 1,
                    textAlign: "center",
                    height: "72px",
                    overflow: "auto",
                }}
            >
                {selectedJob.description}
            </Typography>
            <Typography
                sx={{
                    color: "white",
                    fontSize: "16px",
                    textAlign: "center",
                }}
            >
                Skills:
            </Typography>
            <Stack
                direction="row"
                spacing={1}
                columns={{ xs: 6, md: 4 }}
                sx={{
                    flexWrap: "wrap",
                    mb: 1,
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
                    fontSize: "16px",
                    my: 1,
                    textAlign: "center",
                    overflow: "auto",
                }}
            >
                {`City: ${selectedJob.city}`}
            </Typography>

        </Box >
    );
}

export default DetailJobCard;