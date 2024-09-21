import React from 'react';
import { Box, Button, Typography, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import PlayCircleIcon from '@mui/icons-material/PlayCircleOutline';

const CustomProductSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: '2rem 1rem', md: '4rem 2rem' }, // Adjust padding for different screen sizes
        backgroundColor: '#f9f9f9',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3" // Smaller variant for mobile
            sx={{
              fontWeight: 'bold',
              mb: 2,
              ml: { xs: 5, md: 9 }, // Remove margin on small screens
              mt: { xs: 5, md: 15 },
              fontSize:{xs:'240%',md:'350%'},
              color: '#17262B',
              textAlign: { xs: 'left', md: 'left' }, // Center text on small screens
            }}
          >
            Create and sell custom products
          </Typography>

          <List sx={{ color: '#17262B', fontWeight: 'bold' }}>
            {['100% Free to use', '900+ High-Quality Products', 'Largest global print network'].map((text, index) => (
              <ListItem key={index} sx={{ padding: 0, ml: { xs: 5, md: 10 } }}>
                <ListItemIcon sx={{ minWidth: '30px', color: '#18C75A' }}>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ color: '#17262B', fontWeight: 'bold', textAlign: { xs: 'left', md: 'left' } }}
                />
              </ListItem>
            ))}
          </List>

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
              variant="contained"
              color="success"
              size="large"
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              Start for free
            </Button>
            <Button
              variant="outlined"
              color="success"
              size="large"
              startIcon={<PlayCircleIcon />}
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              How it works?
            </Button>
          </Box>

          {/* Trust Indicator */}
          <Typography
            sx={{
              mt: 2,
              color: '#39B75D',
              ml: { xs: 0, md: 10 },
              fontWeight: 'bold',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Trusted by over 8M sellers around the world
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', textAlign: 'center' }}>
            <img
              src="https://printify.com/pfh/assets/animations/images/img_5.png" // replace with actual image URL
              alt="Custom T-shirt"
              style={{ width: '80%', maxWidth: '300px', height: 'auto', margin: '0 auto 10px -200px' }}
            />
            <img src="https://i.ibb.co/474SDZS/img-0.webp" alt="img-0" style={{ width: '25%', maxWidth: '200px', height: 'auto', margin: '0 auto 80px -220px' }}/>
            <img src="https://i.ibb.co/JCy2MQ3/Screenshot-2024-09-20-124226.png" // replace with actual image URL
              alt="Person Pointing"
              style={{
                position: 'absolute',
                bottom: 1,
                right: { xs: '0', md: '-50px' }, // Adjust positioning on smaller screens
                width: '30%',
                marginLeft:'50px'
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomProductSection;
