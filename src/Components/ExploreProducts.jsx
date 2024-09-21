import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ExploreProducts = () => {
  return (
    <Box
      sx={{
        padding: { xs: '2rem 1rem', md: '4rem 2rem' }, // Adjust padding for different screen sizes
        backgroundColor: '#f9f9f9',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
          
          <img src="https://i.ibb.co/B63wHjX/Screenshot-2024-09-20-203546.png" alt="Screenshot-2024-09-20-203546"
              style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '0 auto -200px 0px' }}
            />
            
          </Box>
        </Grid>

        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5" // Smaller variant for mobile
            sx={{
              fontWeight: 'bold',
              fontSize:'180%',
              mb: 4,
              ml: { xs: 4, md: 9 }, // Remove margin on small screens
              mt: { xs: 25, md: 15 },
              color: '#17262B',
              textAlign: { xs: 'left', md: 'left' }, // Center text on small screens
            }}
          >
            Easily add your design to a <br />wide range of products
          </Typography>

          <Typography
            
            sx={{
              fontSize:'90%',
              mb: 4,
              ml: { xs: 4, md: 9 }, // Remove margin on small screens
              mt: { xs: 2, md: 1 },
              color: '#7F8688',
              textAlign: { xs: 'left', md: 'left' }, // Center text on small screens
            }}
            
          >
            With our free design tools, you can easily add your  <br /> custom designs to t-shirts, mugs, phone cases, and <br /> hundreds of other products.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: 2,
              mt: 3,
              ml: { xs: 0, md: 10 },
            }}
          >
            <Button
              variant="none"
              
              size="large"
              sx={{ textTransform: 'none', fontWeight: 'bold' , color:"#3AA258" }}
            >
              All Products <ArrowForwardIcon/>
            </Button>
           
          </Box>

          
        </Grid>

        
      </Grid>
    </Box>
  );
};

export default ExploreProducts;
