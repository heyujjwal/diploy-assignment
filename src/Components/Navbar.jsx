
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb'; // Replace this with your logo icon or image
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ButtonAppBar = () => {
  // Use Material-UI's useMediaQuery hook to detect screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {/* Fixed AppBar */}
      <AppBar
        position="fixed"  // Set position to fixed
        sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', zIndex: theme.zIndex.drawer + 1 }} // Higher zIndex to stay on top
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo and Hamburger Menu on Small Screens */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex', color: '#39B75D' },ml:4 ,mr: 2 }} />
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                color: '#39B75D',
                fontWeight: 'bold',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              Printify
            </Typography>


            {/* Hamburger Menu */}
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 1,color:"#39B75D" ,display: { xs: 'block', md: 'none' } }}
              >
                <MenuIcon />
                <AdbIcon  />
              </IconButton>
            )}
          </Box>

          {/* Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Button sx={{ color: '#17262B' }}>Catalog</Button>
               <Button sx={{ color: '#17262B' }}>
                 How it works <ExpandMoreIcon />
               </Button>
               <Button sx={{ color: '#17262B' }}>Pricing</Button>
               <Button sx={{ color: '#17262B' }}>Blog</Button>
               <Button sx={{ color: '#17262B' }}>
                 Services <ExpandMoreIcon />
               </Button>
               <Button sx={{ color: '#17262B' }}>
                 Use-cases <ExpandMoreIcon />
               </Button>
               <Button sx={{ color: '#17262B' }}>
                 Need help? <ExpandMoreIcon />
               </Button>
               <Button sx={{ ml: 10 }} variant="outlined" color="inherit">
                 Login
               </Button>
               <Button
                 sx={{ background: '#39B75D', color: 'white', ml: 2, mr: 4 }}
                 variant="contained"
               >
                 Signup
               </Button>

            
          </Box>

          {/* Login and Sign up buttons only on mobile */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" variant="outlined" sx={{ mr: 2 }}>
                Log in
              </Button>
              <Button
                color="primary"
                variant="contained"
                sx={{ background: '#39B75D', color: 'white', ml: 1 }}
              >
                Sign up
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Offset to prevent content from being overlapped */}
      <Toolbar /> {/* Add an empty Toolbar here to create space equivalent to the height of the fixed AppBar */}
    </>
  );
};

export default ButtonAppBar;



