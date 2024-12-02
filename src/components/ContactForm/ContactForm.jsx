
import { Box, TextField, Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DownloadIcon from "@mui/icons-material/Download";
import Resume from "../../assets/Test resume.pdf";

const ContactForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        height:'100vh',
        maxHeight:'100vh',
        overflow: "hidden", 
        width: "100%",
        pt:5,
        background: "#e6f9f5" 
        
      }}
    >
      {/* Header Section */}
      <Typography variant="h4" component="h2" sx={{ml:6}} gutterBottom>
        Take A <span style={{color:'orangered'}}>Coffee </span> & Chat With Me
      </Typography>

      {/* Contact Info Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Email Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 2,
            bgcolor: "#ffe6e6",
            borderRadius: 2,
            boxShadow: 1,
            minWidth: "250px",
          }}
        >
          <EmailIcon color="error" />
          <Typography variant="body1">newofcmps@gmail.com</Typography>
        </Box>

        {/* Phone Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 2,
            bgcolor: "#e6f7ff",
            borderRadius: 2,
            boxShadow: 1,
            minWidth: "250px",
          }}
        >
          <PhoneIcon color="primary" />
          <Typography variant="body1">+91 8414832016</Typography>
        </Box>

        {/* Download Resume Button */}
        <Button
         href={Resume}
        download="Resume.pdf"
          variant="outlined"
          startIcon={<DownloadIcon />}
          color="primary"
          sx={{
            p:'14px',
            bgcolor: "rgb(3, 150, 199)",
            color:"white",
            borderRadius: 2,
            boxShadow: 1,
            minWidth: "250px",
            "&:hover": {  },
          }}
        >
          Download Resume
        </Button>
      </Box>

      {/* Form Section */}
      <TextField
        fullWidth
        label="Your Name"
        variant="outlined"
        sx={{
          bgcolor: "#fff",
          width: "50%",
        
        }}
      />
      <TextField
      
        label="Your Email"
        type="email"
        variant="outlined"
        sx={{
          bgcolor: "#fff",
          width: "50%",
          

        }}
      />
      <TextField
        
        label="Your Message"
        multiline
        rows={4}
        variant="outlined"
        sx={{
          bgcolor: "#fff",
          width: "50%",
          borderRadius: "15px",
        }}
      />
         <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#4caf50",
            color: "#fff",
            fontWeight: 600,
            textTransform: "none",
            padding: "10px 20px",
            ":hover": { bgcolor: "#45a045" },
          }}
        >
          Send Message
        </Button>
    </Box>
  );
};

export default ContactForm;
