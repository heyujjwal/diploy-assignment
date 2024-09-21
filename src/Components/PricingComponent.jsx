import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const PricingComponent = () => {
  // Use a media query hook to detect screen size
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
    <Box sx={{ p: 5, backgroundColor: '#203741', color: '#fff', borderRadius: 2,width:{md:'40%',xs:'50%'} ,ml:{md:20,xs:10 }}}>
      <Grid container spacing={2} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" component="h1" gutterBottom fontWeight='bold'>
            Make Money, Risk-Free
          </Typography>
          <Typography variant="body1" gutterBottom>
            You pay for fulfillment only when you make a sale
          </Typography>

          <Box sx={{ backgroundColor: '#17262B', p: 2, borderRadius: 2, mt: 2 }}>
            <Typography variant="body1">You sell a t-shirt: $30</Typography>
            <Typography variant="body1">You pay for its production: $12</Typography>
            <Box sx={{ mt: 2, borderTop: '1px solid #fff', pt: 2 }}>
              <Typography variant="h5" component="p" color="green">
                Your profit: $18
              </Typography>
            </Box>
          </Box>

          <Button variant="contained" color="success" sx={{ mt: 3 }}>
            Start Selling
          </Button>

          <Typography variant="body2" sx={{ mt: 2 }}>
            100% Free to use · 900+ Products · Largest print network
          </Typography>
        </Grid>

        {/* Image Section */}
        {!isMobile && (
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <img
                src="https://i.ibb.co/GpvqtMW/Screenshot-2024-09-21-145616.png"
                alt="Lady watering money plant"
                style={{ maxWidth: '100rem', height: 'auto' ,marginLeft:'40rem',borderRadius:'10px'}}
              />
            </Box>
          </Grid>
        )}
        
      </Grid>
    </Box>
  );
};

export default PricingComponent;
