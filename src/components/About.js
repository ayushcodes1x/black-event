import { Box, Grid, Typography } from "@mui/material";
import AboutPagePhoto1 from '../images/AboutPagePhoto1.jpg'
import AboutPagePhoto2 from '../images/AboutPagePhoto2.jpg'

const About = () => {
  return (
    <>
      <Box className="AboutBox">
        <Box className="secBox">
          <p className="aboutPara">About The Black Event </p>
          <Grid
            container
            sx={{ display: "flex", flexDirection: "row", height: "100%" }}
          >
            <Grid
              item
              sx={{
                backgroundImage: `url(${AboutPagePhoto1})`, // Fix here
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              className="FirstGridItem"
              lg={6}
              md={6}
              xs={12}
              sm={12}
            ></Grid>
            <Grid
              item
              lg={6}
              md={6}
              xs={12}
              sm={12}
              sx={{
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                flexDirection: "column",

              }}
            >
              <Typography
                fontSize={30}
                fontWeight={600}
                sx={{ mb: "1rem", color: "white" }}
              >
                Our story
              </Typography>
              <Typography sx={{ color: "white" }}>
                From humble beginnings in <span style={{ fontWeight: "bold", fontSize: "large" }}>Patna</span>
                , we embarked on a journey, now extending our expertise to  <span style={{ fontWeight: "bold", fontSize: "large" }}>Bangalore</span>. Our tale is one of growth, passion, and dedication to creating unforgettable experiences.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ display: "flex", flexDirection: "row", height: "100%" }}
          >
            <Grid
              item
              lg={6}
              md={6}
              xs={12}
              sm={12}
              sx={{
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                flexDirection: "column",
              }}
            >
              <Typography
                fontSize={30}
                fontWeight={600}
                sx={{ mb: "1rem", color: "white" }}
              >
                {/* Our services */}
              </Typography>
              <Typography sx={{ color: "white" }}>
                From venue selection to seamless execution, our event management services ensure every detail is perfect. Let us handle logistics, coordination, and more for your memorable occasions.
              </Typography>
            </Grid>
            <Grid
              item
              className="FirstGridItem"
              lg={6}
              md={6}
              xs={12}
              sm={12}
              sx={{
                backgroundImage: `url(${AboutPagePhoto2})`,
                backgroundSize: "cover",
                backgroundPosition: "center"

              }}
            ></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default About;