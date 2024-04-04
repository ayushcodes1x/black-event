import { Box, Stack, Typography } from "@mui/material";

const LandingPage = () => {
    const Whatsapp = "https://wa.me/+918368224252?text=Hello! Here for The Black Event.";
    const handleWhatsAppChat = () => {
        window.open(Whatsapp, "_blank");
    };

    const ToService = () => {
        window.scroll({ top: 1750, behavior: "smooth" });
    };

    return (
        <Box className="landingPageContainer">
            <Stack className="landingStack">
                <button className="firstBtn" onClick={ToService}>Explore our services</button>
                <button className="secondBtn" onClick={handleWhatsAppChat}>Contact us</button>
            </Stack>
            <Box
                sx={{
                    position: 'absolute',
                    top: 'auto',
                    bottom: 230,
                    right: 0,
                    textAlign: 'right',
                    fontStyle: 'italic',
                    color: 'white',
                    padding: '8px',
                }}
            >
                <Typography>
                    "Black isn't just a colour, it's an emotion." <br />
                    - Prem Kapoor
                </Typography>
            </Box>
        </Box>
    );
};

export default LandingPage;
