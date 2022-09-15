import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function JobCardMUI() {
    return (
        <Card sx={{ maxWidth: 300, width: 300 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Title
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    Skills
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    description
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}