
import { Box } from '@mui/material';

const NavigationDots = ({ active, onDotClick }) => (
  <Box
    sx={{
      position: 'fixed',
      top: '50%',
      right: '20px',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    {['home', 'about', 'work', 'skills','contact' ].map((item) => (
      <Box
        key={item}
        onClick={() => onDotClick(item)} // Trigger the parent-provided callback
        sx={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: active === item ? '#313BAC' : '#C4C4C4', // Highlight active dot
          margin: '8px 0',
          display: 'block',
          transition: 'background-color 0.3s',
          cursor: 'pointer', // Show clickable cursor
        }}
        aria-label={`Navigate to ${item}`}
      />
    ))}
  </Box>
);

export default NavigationDots;
