import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 






const testimonials = [
  {
    text: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
    name: "Robert A. Voltaire",
    position: "Shopify Store",
    img: "https://i.ibb.co/Gs1b2r6/Screenshot-2024-09-21-120458.png",
  },
  {
    text: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
    name: "Nikki",
    position: "Wix Store",
    img: "https://i.ibb.co/ZGGKFmZ/Screenshot-2024-09-21-120020.png",
  },
  {
    text: "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.",
    name: "Quinten Barney",
    position: "Etsy Merchant",
    img: "https://i.ibb.co/8MrmCBd/testimonial2.jpg",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ padding: { xs: '2rem', md: '4rem' }, textAlign: 'center',mt:0,backgroundColor: '#f9f9f9' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4,textAlign: 'left' }}>
      Trusted by over 8M <br /> sellers around the <br /> world
      </Typography>
      <Typography
            
            sx={{
              fontSize:'90%',
              mb: 4,
              ml: { xs: 4, md: 60 }, // Remove margin on small screens
              mt: { xs: 2, md: -20 },
              mb: { xs: 2, md: 10 },
              color: '#7F8688',
              textAlign: { xs: 'left', md: 'left' },
               // Center text on small screens
            }}
            
          >
            Whether you are just getting started or run an <br />enterprise-level e-commerce business, we do <br /> everything we can to ensure a positive merchant <br />experience.
          </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ padding: '2rem', }}>
            <img 
              src={testimonial.img} 
              alt={testimonial.name} 
              style={{ borderRadius: '20%', width: '100px', height: '100px', marginBottom: '1rem',boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)', }} 
            />
            <Box sx={{width: {md:'400px',xs:'300px'}, height: {md:'250px',xs:'250px'},textAlign:'center',px: { xs: '1rem', md: '5rem' },boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',borderRadius: '20px' ,ml:{xs:1,md:35}}}>
            <Typography variant="body1" sx={{ mb: 2, mt:0,p:2 }}>
              "{testimonial.text}"
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' ,mt:-2}}>
              {testimonial.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#39B75D',mt:-1}}>
              {testimonial.position}
            </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
      <Button variant="contained" sx={{ mt: 5 }}>
        Read More Testimonials
      </Button>
    </Box>
  );
};

export default TestimonialCarousel;
