import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import EventsPic1 from "../images/EventsPic1.jpeg"
import EventsPic2 from "../images/EventsPic2.jpeg"
import EventsPic3 from "../images/EventsPic3.jpeg"
import EventsPic4 from "../images/EventsPic4.jpeg"
import EventsPic5 from "../images/EventsPic5.jpeg"
import EventsPic6 from "../images/EventsPic6.jpeg"



const Services = () => {
    const BlackEventServices = [
        {
            image: EventsPic1,
            text: 'Flashmob'
        },
        {
            image: EventsPic2,
            text: 'Corporate'
        },
        {
            image: EventsPic3,
            text: 'Concerts'
        },
        {
            image: EventsPic4,
            text: 'Organized party'
        },
        {
            image : EventsPic5,
            text: 'Sports events'
        },
        {
            image : EventsPic6,
            text: 'Promotion events'
        }
    ];
    
    return (
        <Box className="ServicesBox"> 
            <Stack className="TextBox">
                <Typography variant="h4">Services we offer</Typography> 
            </Stack>
            <Grid container justifyContent="center" spacing={2} sx={{ width: "100%", padding:'4vh' }}>
                {BlackEventServices.map((service, index) => (
                    <Grid item key={index} lg={4} md={6} xs={12} sm={6} sx={{ display: "flex", justifyContent: "space-between" , flexDirection:"column" , alignItems:"center"}}>
                        <Box
                            className = 'ServicesGridItem'
                            sx={{
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center', 
                                transition: 'transform 0.3s', 
                                '&:hover': {
                                    transform: 'scale(1.1)', 
                                },
                            }}
                        >
                        </Box>
                        <Typography variant="body1" sx={{color:"white"}}>{service.text}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Services;
