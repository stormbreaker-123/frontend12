import { Box, Typography } from "@mui/material";
import images from "../../constants/images";

const abouts = [
  { title: "Front-end Development", description: "I build beautiful, responsive websites that look great on any device. Using tools like React and modern frameworks, I turn ideas into stunning user experiences.", imgUrl: images.about01 },
  { title: "Back-end Development", description: "I create powerful and efficient server-side applications. From databases to APIs, I make sure everything runs smoothly behind the scenes.", imgUrl: images.about04 },
  { title: "Web Design", description: "I design clean, eye-catching websites that are easy to use. My focus is on blending creativity and functionality to make your ideas stand out.", imgUrl: images.about03 },
];

const About = () => {
  return (
    <>
      {/* Header Section */}
      <Box sx={{ height: "100vh", width: "100%", background: "#e6f9f5" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 12,
            ml: 13,
          }}
        >
          <h1 style={{ color: "black" }}>
            I Know That <span style={{ color: "#870cf3" }}>Good Design</span>
          </h1>
          <h1 style={{ marginTop: -10 }}>
            Means <span style={{ color: "#870cf3" }}>Good Business</span>
          </h1>
        </Box>

        {/* Profile Cards Section */}
        <Box sx={{ display: "flex", justifyContent: "space-around", p: 5, flexWrap: "wrap", gap: 4 }}>
          {abouts.map((about, index) => (
            <Box
              key={index}
              sx={{
                width: 380,
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#232347",
                boxShadow: 3,
              }}
            >
              {/* Top Image Section with SVG Curve */}
              <Box sx={{ position: "relative", height: 250, overflow: "hidden" }}>
                <Box
                  component="img"
                  src={about.imgUrl}
                  alt={about.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                {/* SVG for Curved Bottom */}
                <Box
                  component="svg"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  sx={{
                    position: "absolute",
                    bottom: -1, // aligns perfectly with the bottom
                    left: 0,
                    width: "100%",
                    height: "50px",
                  }}
                >
                  <path
                    d="M0,0 C150,100 350,0 500,100 L500,150 L0,150 Z"
                    style={{ fill: "#232347" }}
                  ></path>
                </Box>
              </Box>

              {/* Bottom Content Section */}
              <Box sx={{ p:3, textAlign: "center", color: "white" }}>
                <Typography variant="h6" gutterBottom sx={{mt:-3}}>
                  {about.title}
                </Typography>
                <Typography variant="body2">{about.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default About;
