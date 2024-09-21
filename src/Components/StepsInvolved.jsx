import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// You can replace the image URLs with your own images
const description = [
  {
    highlightedTitle: 'CREATE ',
    title:'custom products',
    description: 'Easily add your designs to a wide range of products using our free tools',
    image: 'https://printify.com/pfh/assets/legacy/custom-products.png', // Replace with actual image URL
  },

  {
    highlightedTitle:'SELL ',title: 'on your terms',
    description: 'You choose the products, sale price, and where to sell',
    image: 'https://printify.com/pfh/assets/legacy/your-products.png', // Replace with actual image URL
  },
  {
    highlightedTitle:'WE HANDLE  ',title: 'fulfillment',
    description: 'Once an order is placed, we automatically handle all the printing and delivery logistics',
    image: 'https://printify.com/pfh/assets/legacy/fullfillment.png', // Replace with actual image URL
  },
];

const StepsInvolved = () => {
  return (
    <Box
      sx={{
        py: { xs: '10rem', md: '12rem' },
        px: { xs: '1rem', md: '10rem' },

        backgroundColor: '#fff', // Set a background color for the section
        textAlign: 'left', // left-align the text
        alignItems:'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Grid container spacing={8} justifyContent="center">
        {description.map((feature, index) => (
          <Grid item xs={4} sm={6} md={4} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              {/* Feature Image */}
              <Box
                component="img"
                src={feature.image}
                alt={feature.title}
                sx={{
                  width: '120px', // Adjust size as needed
                  height: '120px',
                  mb: 2, // Add space below the image
                }}
              />
              {/* Feature Title */}
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 0, color:'#39B75D' }}
              >
                {feature.highlightedTitle}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', mb: 1 }}
              >
                {feature.title}
              </Typography>
              
              {/* Feature Description */}
              <Typography variant="body1" color="textSecondary" fontSize='80%'>
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StepsInvolved;
