import React from "react";
import { useEffect } from "react";
import { Box, Grid, Typography, Avatar, Divider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../../constants/images";

const skills = [
  { name: "HTML5", img: `${images.html}` },
  { name: "CSS3", img: `${images.css}` },
  { name: "Javascript", img: `${images.javascript}` },
  { name: "React JS", img: `${images.react}` },
  { name: "Typescript", img: `${images.typescript}` },
  { name: "Material UI", img: `${images.mu5}` },
  { name: "C++", img: `${images.cpp}` },
  { name: "Python", img: `${images.python}` },
  { name: "Node JS", img: `${images.node}` },
  { name: "SQL", img: `${images.sql}` },
  { name: "Selenium", img: `${images.selenium}` },

  


];

const experiences = [
  { year: "2020-2024", title: "Btech Production Engineering", org: "National Institute of Technology Agartala",mark:"83.7%" },
  { year: "2020", title: "Senior Secondary (XII) science", org: "Hindi Higher Secondary School (Cbse Board) • Agartala, Tripura",mark:'74.2%' },
  { year: "2018", title: "Secondary (X)", org: "Tripureswari Vidyamandir (Cbse Board) • Agartala, Tripura",mark:'85.8%' },
];

const Skills = () => {
 useEffect(() => {
  AOS.init({
    duration: 1200, // Animation duration
    offset: 0,      // Trigger animation as soon as element is within the viewport
    easing: "ease-in-out", // Easing function
    once: true,     // Trigger animation only once
  });
}, []);

  return (
    <Box sx={{ height: "100vh", width: "100%",  background: "#e6f9f5"  }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 15,
          ml: 4,
        }}
      >
        <h1 data-aos="fade-right" style={{ marginTop: -10 }}>
          <span data-aos="fade-up" style={{ color: "#870cf3" }}>
            Skills
          </span>{" "}
          & <span style={{ color: "#870cf3" }}>Education</span>
        </h1>
      </Box>

      {/* Content Section */}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,pl:25, mt:2}}
      >
        <Grid container>
          {/* Skills Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
          
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Skills
            </Typography>
            <Grid
              container
              spacing={1}
              justifyContent="center"
              sx={{ maxWidth: 400 }}
            >
              {skills.map((skill, index) => (
                <Grid
                  item
                  xs={4}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box textAlign="center" sx={{ mb: 1 }}>
                    <Avatar
                      data-aos="zoom-in"
                      sx={{
                        width: 60, // Outer circle size
                        height: 60, // Outer circle size
                        margin: "0 auto",
                        backgroundColor: "#f5f5f5",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        overflow: "hidden", // Hide anything outside the circular border
                       // Optional: add a border around the avatar
                      }}
                    >
                      <img
                        src={skill.img}
                        alt={skill.name}
                        style={{
                          width: "40px", // Inner image size (smaller)
                          height: "40px", // Inner image size (smaller)
                          objectFit: "cover", // Ensure the image maintains aspect ratio without distortion
                          borderRadius: "50%", // Make the image inside the circle
                        }}
                      />
                    </Avatar>

                    <Typography
                      variant="body2"
                      sx={{ marginTop: 0.5, fontSize: 12 }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Divider */}
          <Grid item xs={12} md={0.5} sx={{ml:-15}}>
            <Divider orientation="vertical" sx={{ height: "100%" }} />
          </Grid>

          {/* Education Section */}
          <Grid item xs={12} md={5.5} sx={{ pl: 3 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ml:8}}>
              Education
            </Typography>
            <Box>
              {experiences.map((exp, index) => (
                <Box
                  key={index}
                  data-aos= 'fade-right'
                  sx={{
                    position: "relative",
                    marginBottom: 4,
                    paddingLeft: 9,
                  }}
                >
                  {/* Horizontal Line */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: -30, // Starts closer to the divider
                      width: 50,
                      height: 2,
                      backgroundColor: "#e0e0e0",
                    }}
                  ></Box>

                  <Typography variant="h6" color="primary">
                    {exp.year}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {exp.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {exp.org}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                   Score :-  {exp.mark}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
