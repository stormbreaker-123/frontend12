// Navbar.jsx
import  { useState } from "react";
import images from "../../constants/images";
import { Box, Paper, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

const Navbar = ({ onHeaderClick }) => {
  // Accept onHeaderClick as a prop
  const headers = ["home", "about", "work", "skills", "contact"];
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = () => {
    setToggleMenu(true);
  };
  const handleClose = () => {
    setToggleMenu(false);
  };

  return (
    <>
      {/* Mobile Menu */}
      {toggleMenu && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "40vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7 )",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            gap: 3,
            pl: 10,
            pt: 20,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 50,
              right: 40,
              color: "white",
            }}
            onClick={handleClose}
          >
            <CloseIcon sx={{ width: 40, height: 60 }} />
          </IconButton>

          {headers.map((header) => (
            <Box
              key={header}
              onClick={() => {
                onHeaderClick(header); // Trigger smooth scrolling
                setToggleMenu(false); // Close menu on click
              }}
              sx={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Calibri",
                fontSize: 22,
                cursor: "pointer",
              }}
            >
              {header}
            </Box>
          ))}
        </Box>
      )}

      {/* Desktop Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          height: "85px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <Box>
          <img
            src={images.portfolio}
            alt="Logo"
            style={{ marginTop: "5px", marginLeft: "10px" }}
          />
        </Box>

        {/* Navigation Links and Menu Icon */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Menu Icon for Mobile */}
          {!toggleMenu && (
            <MenuIcon
              sx={{
                display: { md: "none", xs: "flex" },
                justifyContent: "flex-end",
                mt: 5,
                ml: 10,
                cursor: "pointer",
              }}
              onClick={handleMenuClick}
            />
          )}

          {/* Desktop Navigation Links */}
          <Paper
            sx={{
              display: { xs: "none", md: "flex" },
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              width: "50%", // Adjust width as needed
              gap: 5,
              padding: 2,
              mt: 1,
              ml: 36,
              borderRadius: "10px",
              boxShadow: 5,
              backgroundImage:
                "linear-gradient(to right, rgba(70, 186, 14, .8), rgba(131, 8, 240, 0.8))",
            }}
          >
            {headers.map((header) => (
              <Box
                key={header}
                onClick={() => onHeaderClick(header)} // Trigger smooth scrolling
                sx={{
                  width: "80px",
                  height: "35px",
                  position: "relative",
                  cursor: "pointer",
                 
                  // "&::after": {
                  //   content: '""',
                  //   position: "absolute",
                  //   width: "0",
                  //   height: "2px",
                  //   bottom: "0",
                  //   left: "0",
                  //   backgroundColor: "#ff0000",
                  //   transition: "width 0.3s ease-in-out",
                  // },
                  // "&:hover::after": {
                  //   width: "100%",
                  // },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "whitesmoke",
                    fontFamily: "Oswald",
                    fontSize: 22,
                    textTransform: "capitalize",
                    "&:hover": {
                    transform: "translateY(-5px)",
                    color:'#05ffae'
                  },
                  }}
                >
                  {header}
                </Box>
              </Box>
            ))}
          </Paper>
        </Box>

        {/* Contact Button */}
        <Box sx={{ display: "flex", gap: 3,mt:3 }}>
      
         <a href="https://www.linkedin.com/in/sayantan-paul-97a862225" target="blank1"> <FaLinkedinIn style={{color: '#0077b5', fontSize:30}}/>   </a> 
       
         <a href="https://github.com/stormbreaker-123?tab=repositories" target="blank2">  <FaGithub style={{color: "#181717", fontSize:28}} /></a>  
          <a href="https://www.facebook.com/sayantan.paul.73113" target="blank3">  <FaFacebookF style={{ color: "#1877f2", fontSize:28}} /> </a>
     
        </Box>
      </nav>
    </>
  );
};

export default Navbar;
