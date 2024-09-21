import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// You can replace the image URLs with your own images
const features = [
  {
    title: 'Higher Profits',
    description: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.',
    image: 'https://printify.com/pfh/assets/legacy/higher-profits.svg', // Replace with actual image URL
  },
  {
    title: 'Robust Scaling',
    description: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.',
    image: 'https://printify.com/pfh/assets/legacy/robust-scaling.svg', // Replace with actual image URL
  },
  {
    title: 'Best Selection',
    description: 'With 900+ products and top quality brands, you can choose the best products for your business.',
    image: 'https://printify.com/pfh/assets/legacy/best-selection.svg', // Replace with actual image URL
  },
];

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        py: { xs: '3rem', md: '5rem' },
        px: { xs: '1rem', md: '4rem' },
        backgroundColor: '#fff', // Set a background color for the section
        textAlign: 'left', // left-align the text
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
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
                variant="h5"
                sx={{ fontWeight: 'bold', mb: 1 }}
              >
                {feature.title}
              </Typography>
              {/* Feature Description */}
              <Typography variant="body1" color="textSecondary">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
