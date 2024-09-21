import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';

// You can replace these with your actual image URLs
const platformLogos = [
  { src: 'https://i.ibb.co/8MrmCBd/Screenshot-2024-09-21-115613.png', alt: 'Etsy', width: '80px' }, // Etsy logo
  { src: 'https://i.ibb.co/c6qrMrH/Screenshot-2024-09-21-120449.png', alt: 'Shopify', width: '80px' }, // Shopify logo
  { src: 'https://i.ibb.co/ZGGKFmZ/Screenshot-2024-09-21-120020.png', alt: 'Wix', width: '80px' }, // Wix logo
  { src: 'https://i.ibb.co/G23Bkcp/Screenshot-2024-09-21-115725.png', alt: 'Squarespace', width: '80px' }, // Squarespace logo
  { src: 'https://i.ibb.co/MhmVgrb/Screenshot-2024-09-21-115957.png', alt: 'WooCommerce', width: '80px' }, // WooCommerce logo
  { src: 'https://i.ibb.co/BspRbrD/Screenshot-2024-09-21-115931.png', alt: 'BigCommerce', width: '80px' }, // BigCommerce logo
  { src: 'https://i.ibb.co/YfGbPbj/Screenshot-2024-09-21-115940.png', alt: 'PrestaShop', width: '80px' }, // PrestaShop logo
  { src: 'https://i.ibb.co/Gs1b2r6/Screenshot-2024-09-21-120458.png', alt: 'API', width: '80px' }, // API icon
];

const ConnectStoreSection = () => {
  return (
    <Box
      sx={{
        py: { xs: '3rem', md: '5rem' },
        px: { xs: '1rem', md: '4rem' },
        backgroundColor: '#ffffff', // Background color
        textAlign: 'center', // Center all content
        position: 'relative', // For absolute positioning of platform logos
      }}
    >
      {/* Title */}
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
        Connect your store
      </Typography>

      {/* Subtitle */}
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Printify easily integrates with major e-commerce platforms and marketplaces
      </Typography>

      {/* Main Logo (central) */}
      <Box
        sx={{
          backgroundColor: '#00C853', // Green color for the central logo
          width: '150px',
          height: '150px',
          borderRadius: '20%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
        }}
      >
        <img
          src="https://i.ibb.co/NxmhR3W/Screenshot-2024-09-21-120436.png" // Replace with central logo (e.g., Printify logo)
          alt="Main Logo"
          style={{ width: '60px', height: '60px' }}
        />
      </Box>

      {/* E-Commerce Platforms Logos */}
      <Grid container spacing={4} justifyContent="center">
        {platformLogos.map((platform, index) => (
          <Grid item xs={6} sm={4} md={3} key={index} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                backgroundColor: '#fff',
                marginLeft: { xs: '20%', md: '30%' },
                borderRadius: '12px',
                alignContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                width: '100px', height: 'auto',
              }}
            >
              <img src={platform.src} alt={platform.alt} style={{ width: '100px', height: '100px' }} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action Section */}
      <Box
        sx={{
          position: 'relative', // For absolute positioning inside the banner
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
          mt: { xs: 10, md: 20 }, // Add space above the CTA for responsiveness
          px: { xs: '1rem', md: '4rem' }, // Padding for mobile and larger screens
          flexDirection: 'column', // Stack items vertically
          width: '100%',
        }}
      >
        {/* Banner Image as background */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height:'auto',
            maxWidth: '900px',
            borderRadius: '22px',
            overflow: 'hidden', // Ensure content stays within the box
          }}
        >
          <img
            src="https://i.ibb.co/hWfxsNK/Screenshot-2024-09-21-123515.png"
            alt="Banner"
            style={{
              width: '100%',
              height: '200%',
              display: 'block',
            }}
          />

          {/* Call to Action Text and Button inside the banner */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%', // Center vertically
              left: '60%', // Center horizontally
              transform: 'translate(-50%, -50%)', // Offset the top-left positioning
              textAlign: 'left',
              color: '#fff', // Ensure text is visible
              width: '100%',
              px: { xs: 2, md: 6 },
               // Padding for smaller screens
            }}
          >
            <Typography variant="h6" sx={{fontSize:{xs:'small',md :'large'}, mt: 0, color: '#1F6B45',mb:0 }}>
              Are you a large business <br />looking for custom solutions?
            </Typography>
            {/* Call to Action Button */}
            
          </Box>
          
        </Box>
        <Button
              sx={{
                backgroundColor: '#fff',
                color: '#17262B',
                fontSize:'xx-small',
                ml:{xs:35,md:80},
                mb:{xs:0,md:0},mt:{xs:-5,md:-8},
                '&:hover': { backgroundColor: '#f5f5f5' }, // Hover effect
              }}
              variant="contained"
            >
              Talk to sales
            </Button>
      </Box>
    </Box>
  );
};

export default ConnectStoreSection;
