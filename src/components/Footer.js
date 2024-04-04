import { Box, Stack } from "@mui/material";
import React from "react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
const Footer = () => {
  const BackToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const Instagram = "https://www.instagram.com/the_black_event/";

  const Maps =
    "https://www.google.com/maps/dir//Ramagondanahalli,+Ramagondanahalli,+Whitefield,+Bengaluru,+Karnataka/@12.9570364,77.6985711,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae120bfe935f69:0x2e5d441c5b2b501d!2m2!1d77.7397711!2d12.956956?entry=ttu";

  
  const Whatsapp = "https://wa.me/+918368224252?text=Hey there! Black event got me here.";

  const handleNavigateInstagram = () => {
    window.open(Instagram, "_blank");
  };

  const handleNavigateMaps = () => {
    window.open(Maps, "_blank");
  };

  const handleWhatsAppChat = () => {
    window.open(Whatsapp, "_blank");
  };

  return (
    <>
      <Box className="footerBox">
        <Box className="footerStack">
          <Stack className="FooterLogoStack" direction="row" gap={2}>
            <button className="FooterBtn" onClick={handleNavigateInstagram}>
              <InstagramIcon />
            </button>
            <button className="FooterBtn" onClick={handleNavigateMaps}>
              <RoomOutlinedIcon />
            </button>
            <button className="FooterBtn" onClick={handleWhatsAppChat}>
              <WhatsAppIcon />
            </button>
          </Stack>

          <p className="footerText">
            Copyright &copy; 2024 Black event company - All Rights Reserved.
          </p>
          <p className="footerText">Powered by Black event</p>
          <button onClick={BackToTop} className="BackToTopBtn">
            <ArrowUpwardOutlinedIcon />
          </button>
        </Box>
      </Box>
    </>
  );
};

export default Footer;