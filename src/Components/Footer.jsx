import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AdbIcon from '@mui/icons-material/Adb';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TikTokIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', py: 10,mt:5}}>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex', color: '#39B75D' },ml:4 ,mr: 2 }} />
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                color: '#39B75D',
                fontWeight: 'bold',
                display: { xs: 'none', md: 'flex' },
                ml:8,mt:-4,mb:5
              }}
            >
              Printify
            </Typography>


            {/* Social Media Icons Section */}
        <Grid item xs={12} md={10} display="flex" justifyContent="right" sx={{mt:-10,mb:8,mr:20}}>
          <IconButton href="#" color="inherit" sx={{color:'#39B75D'}} >
            <FacebookIcon />
          </IconButton>
          <IconButton href="#" color="inherit" sx={{color:'#39B75D'}}>
            <InstagramIcon />
          </IconButton>
          <IconButton href="#" color="inherit" sx={{color:'#39B75D'}}>
            <LinkedInIcon />
          </IconButton>
          <IconButton href="#" color="inherit" sx={{color:'#39B75D'}}>
            <YouTubeIcon />
          </IconButton>
          <IconButton href="#" color="inherit" sx={{color:'#39B75D'}}>
            <TwitterIcon />
          </IconButton>
          <IconButton href="#" color="inherit" sx={{color:'#39B75D'}}>
            <TikTokIcon />
          </IconButton>


        </Grid>
      <Grid container spacing={5} justifyContent="center" sx={{fontSize:'small'}}>
        {/* Footer Links Section */}
        <Grid item xs={3} md={10}>
          <Grid container spacing={6} justifyContent="space-between">
            <Grid item xs={8} sm={6} md={3}>
              <Typography variant="body" gutterBottom >
                <b >Integration</b>
              </Typography>
              

              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px' paddingTop='15px'>Squarespace</Link>


              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Shopify</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Etsy</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>eBay</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Amazon</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>TikTok Shop</Link>

              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>PrestaShop</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Printify Pop-Up Store</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Printify API</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Shutterstock</Link>

              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Wix</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>WooCommerce</Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body" gutterBottom>
                <b>Discover</b>
              </Typography>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px' paddingTop='15px'>Blog</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Guides</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Products</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Pricing</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Brands</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Shipping Rates</Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body" gutterBottom>
                <b>Start Selling</b>
              </Typography>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px' paddingTop='15px'>Custom T-shirts</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Custom Hoodies</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Custom Mugs</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Custom Socks</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Custom Products</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Start a Clothing Line</Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body" gutterBottom>
                <b>Printify</b>
              </Typography>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px' paddingTop='15px'>Print on Demand</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Print Providers</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>About</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Contact Us</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Jobs</Link>
              <Link href="#" color="inherit" underline="none" display="block" paddingBottom='15px'>Webinars</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={10} textAlign="center">
          <Typography variant="body6" color="textSecondary">
            <Link href="#" color="inherit" underline="none" mr={2}>Intellectual Property Policy</Link>
            <Link href="#" color="inherit" underline="none" mr={2}>Terms of Service</Link>
            <Link href="#" color="inherit" underline="none" mr={2}>Privacy Policy</Link>
            <Link href="#" color="inherit" underline="none">Security</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" mt={2}>
            © 2024 Printify, Inc. All rights reserved.
          </Typography>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Footer;
