import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { AppBar } from "@mui/material";
// import Black_Event_Logo from "../images/Black_Event_logo.jpg"

const Navbar = () => {


  return (
    <AppBar position="fixed" sx={{ background: "rgba(255, 255, 255, 0.8)" }}>
      <Toolbar className="toolbar">
        <Stack className="left">
          <Typography fontSize={30} fontWeight={600} sx={{ mr: "2rem" }}>
           The Black Event
            {/* <img src={Black_Event_Logo} alt="logo" width={30} /> */}
          </Typography>

        </Stack>
        {/* <Stack direction="row" className="middle">
          <Button
            sx={{
              borderBottom:
                activeButton === "Home" ? "2px solid white" : "none",
                color :"white"

            }}
            onClick={() => handleButtonClick("Home")}
          >
            Home
          </Button>
          <Button
            sx={{
              borderBottom:
                activeButton === "Services" ? "2px solid white" : "none",
                color :"white"

            }}
            onClick={() => handleButtonClick("Services")}
          >
            Services
          </Button>
          <Button
            sx={{
              borderBottom:
                activeButton === "Contact" ? "2px solid white" : "none",
                color :"white"
            }}
            onClick={() => handleButtonClick("Contact")}
          >
            Contact
          </Button>
        </Stack> */}

        <Stack
          className="right"
          fontSize={30}
          fontWeight={600}
          sx={{ display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}
        >
          +91 83682 24252
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;