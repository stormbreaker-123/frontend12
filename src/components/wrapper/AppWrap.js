
import { Box } from "@mui/material";

const AppWrap = (Component,idName) =>
  function HOC() {
    return (

      <Box id={idName}
        sx={{
          minHeight: "100vh", // Ensure full viewport height
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Main content */}
        <Box
          sx={{
      
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center",   
          }}
        >
          <Component />
        </Box>

        {/* Footer */}

        {idName !== 'work' && idName!=='about' && (
        <Box
          sx={{
            position: "absolute",
            right: 5,
            bottom: 0,
            zIndex: 5000,
          }}
        >
          <p style={{color:'orangered', fontFamily: "'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans-serif'"}}>Copyright @Sayantan <br /> All rights reserved</p>
       
        </Box>
        )
        }
      </Box>
      
   
     
    );
  
  };
  
export default AppWrap;
