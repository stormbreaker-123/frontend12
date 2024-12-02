
import {
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/material";


import WavingHandIcon from "@mui/icons-material/WavingHand";

import images from "../../constants/images";

const Header = () => {
  return (
    <Grid container sx={{ height: "100vh", position:"relative" , backgroundImage:`url(${images.background})`,backgroundSize:'cover'}}>
      {/* Left Side: Box 1 and Box 2 */}
      <Grid item xs={4} sx={{ mt: 20, zIndex:10,position:"absolute", ml:30 }}>
        <Box sx={{ display: "inline-flex", flexDirection: "column" , }}>
          {/* Box 1 */}
          <Paper
            sx={{
              display: "inline-flex",
              flexDirection: "row",
              p: 4,
              borderRadius: 8,
              mb: 4, 
            }}
          >
            <Typography>
              <WavingHandIcon
                sx={{ color: "#f69606", mt: 1, height: 40, width: 40 }}
              />
            </Typography>
            <Box sx={{ ml: 3 }}>
              <Typography variant="h5" color="initial">
                Hello, I am{" "}
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                sx={{ fontStyle: "italic", fontWeight: "bolder", pl: 2 }}
              >
                Sayantan Paul
              </Typography>
            </Box>
          </Paper>

          {/* Box 2 */}
          <Paper
  sx={{
    p: 1.5,
    pr: 10,
    borderRadius: 4,
    mt: 2,
  }}
>
  <Box>
    <Typography
      variant="h6"
      color="initial"
      sx={{
        fontSize: "16px",
        display: "inline-flex",
        flexDirection: "column",
        fontStyle: "italic",
        color: "#00A36C",
        pl:5
      }}
    >
      Web Developer <br />
      <span style={{paddingLeft:'50px'}}>Tech Enthusiast</span>
    </Typography>
  </Box>
</Paper>

        </Box>
      </Grid>

      {/* Middle: Box 3 */}
      <Grid
        item
        xs={8}
        sx={{  position:"absolute",mt:20,ml:65}}
      >
        <Box sx={{ mr: 50 }}>
          <img src={images.circle} alt="Circle Graphic" />
        </Box>
      </Grid>

      <Box sx={{position:"absolute",ml:67, mt:15}}>

        <img src={images.profile} alt="" style={{height:"572px"}} />

      </Box>
    </Grid>
  );
};

export default Header
