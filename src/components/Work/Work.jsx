import { useEffect } from "react";
import { Box, Card, CardContent, Typography, Link } from "@mui/material";
import images from "../../constants/images";
import AOS from "aos";
import "aos/dist/aos.css";
import { red } from "@mui/material/colors";

const works = [
  {
    title: "Anywhere",
    appType: "Travel App",
    description:
      "Anywhere is a travel explorer app that sparks wanderlust and helps you discover the world. Whether you're an keen traveler or seeking your next adventure, Anywhere offers tools and inspiration to explore new destinations.",
    imgUrl: images.anywhere,
    link: "",
  },
  {
    title: "Death Predictor",
    appType: "ML App",
    description:
      "It can predict your death by taking some criteria like age, anaemia, diabetes, ejection_fraction etc.",
    imgUrl: images.ml,
    link: "https://predictor-ml.onrender.com",
  },
  {
    title: "TIC TAC TOE",
    appType: "Web App",
    description: "Play And Enjoy the Game!",
    imgUrl: images.tictactoe,
    link: "https://melodic-moxie-b63cd4.netlify.app",
  },
  {
    title: "Cnc Plotter Machine",
    appType: "CNC",
    description:
      "A CNC plotter machine is a 3D controlled 2D plotting machines which uses a pen to draw text or image on any given solid surface can be used for the purposes such as PCB Design, logo design, etc",
    imgUrl: images.cnc,
    link: "https://drive.google.com/file/d/1BDRERf6lqYD_lRQk-z_TRnuxKUUwDZvE/view",
  },
];

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      offset: 0, // Trigger animation as soon as element is within the viewport
      easing: "ease-in-out", // Easing function
      once: true, // Trigger animation only once
    });
  }, []);
  return (
    <>
      {/* header text */}
      <Box sx={{ height: "100vh", width: "100%", background: "#e6f9f5" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 10,
            ml: 10,
          }}
        >
          <h1 style={{ color: "black" }}>
            My <span style={{ color: "#870cf3" }}>PortFolio</span> section
          </h1>
        </Box>

        {/* profiles */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            p: 5,
            flexWrap: "wrap",
            mt: -8,
          }}
        >
          {works.map((work, index) => (
            <Card
              data-aos={
                index === 0
                  ? "fade-left" // First card (left fade)
                  : index === 1
                  ? "fade-up" // Second card (fade up)
                  : index === 2
                  ? "fade-down" // Third card (fade down)
                  : "fade-right" // Fourth card (right fade)
              }
              sx={{
                width: 305,
                height: 450,
                borderRadius: 2,
                boxShadow: 3,
                overflow: "hidden",
                position: "relative",
                padding: 2, // Add overall padding to the Card
                background: "#f9f9f9",
                mt: 4,
              }}
            >
              {/* Image Section */}
              <Box
                component="div"
                sx={{
                  height: 230,
                  backgroundImage: `url(${work.imgUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 2, // Add a subtle border-radius to the image
                  overflow: "hidden", // Prevent overflow if using rounded corners
                }}
              ></Box>

              {/* Content Section */}
              <CardContent
                sx={{
                  textAlign: "center",
                  marginTop: 1, // Space between image and text
                }}
              >
                <Typography
                  sx={{
                    display: "inline-block",
                    fontSize: "12px",
                    color: "#888",
                  }}
                >
                  {work.appType}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 1,
                    fontFamily: "'Dancing Script', cursive",
                  }}
                >
                  {work.link ? (
                    // If there is a link, render it as a clickable <a> tag
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "red";
                        e.target.style.cursor = "grab";
                      }} // Hover color change to red
                      onMouseLeave={(e) => {
                        e.target.style.color = "inherit";
                        e.target.style.cursor = "default";
                      }}
                    >
                      {work.title}
                    </a>
                  ) : (
                  
                    <span>{work.title}</span>
                  )}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "black",
                    fontWeight: 550,
                  }}
                >
                  {work.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Work;
