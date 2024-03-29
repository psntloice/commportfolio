import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { styled, keyframes } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';


const contactUsStyle = {
  fontSize: '1.2rem', // Adjust font size as needed
  color: 'white', // Adjust color as needed
  display: 'inline-block',
  fontWeight: 'bold',
  transform: 'scale(1)', // Start at normal size
  transition: 'transform 15s ease-in-out', // Adjust transition duration and timing
  opacity: 1, // Start with full opacity
};

const contactUsHoverStyle = {
  ...contactUsStyle, // Inherit base styles
  transform: 'scale(2)', // Scale up slightly on hover
  opacity: 0.7, // Reduce opacity on hover
};

// Define keyframes for horizontal dancing animation
const danceHorizontalKeyframes = keyframes`
0% {
  transform: translateX(0) scale(1); /* Start at the initial position and scale */
}
33% {
  transform: translateX(-5px) scale(1.7); /* Move to the left and scale up */
}
66% {
  transform: translateX(15px) scale(1.3); /* Move to the right and scale down */
}
100% {
  transform: translateX(0) scale(1); /* Back to the original position and scale */
}
`;

// Create a styled component for the animated "Contact us" text
const AnimatedContactUs = styled('span')`
  ${contactUsStyle}
  animation: ${danceHorizontalKeyframes} 5s ease infinite alternate;
`;

const tiers = [
  {
    title: 'Basic',
    minititle: 'Ideal for individuals or small teams or businesses just getting started',
       description: [
      'Up to 5 Pages',
      'Basic User Interface',
      'Email Support',
      'Social Media Integration'
    ],
  },
  {
  title: 'Standard',
  minititle: 'Perfect for growing teams or businesses with more advanced needs',
      description: [
     ' Up to 10 Pages',
     'Customizable Workflows and Structures',
     'Priority Email Support',
'Basic Analytics',
'Basic SEO Optimization '
    ],
  },
  {
    title: 'Premium',
    minititle: 'Fully customizable plan tailored for large teams or businesses requiring robust features',
    subheader: 'Recommended',
       description: [
      'Unlimited Pages',
      'Customizable Workflows and Structure with Advancement',
'Priority Support on all contact platforms',
'Regular Maintenance and Updates',
'Dedicated Account Manager',
'On-site Training',
'Advanced Analytics',
'Advanced SEO Optimization ',
'Scalable Infrastructure',
    ],
  },
  
];

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
// useInView hook returns a tuple with a ref and a boolean value indicating if the element is in view
const { ref, inView } = useInView({
  /* Optional options object */
  threshold: 0.5, // Trigger when 50% of the target is visible
});
const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  const offset = 128;
  if (sectionElement) {
    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  }
};

  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary" textAlign={"center"}>
        Choose a Plan That Fits Your Needs
                </Typography>
        
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Premium' ? 12 : 6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Premium' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'Premium' ? 'primary.main' : undefined,
                background:
                  tier.title === 'Premium'
                    ? 'primary.backgbox'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color:
                      tier.title === 'Premium' ? 'primary.contrastText' : '',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  
                  {tier.title === 'Premium' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                        backgroundColor: 'primary.contrastText',
                        '& .MuiChip-label': {
                          color: 'primary.dark',
                        },
                        '& .MuiChip-icon': {
                          color: 'primary.dark',
                        },
                      }}
                    />
                  )}
                 
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    color:
                      tier.title === 'Premium'
                        ? 'primary.contrastText'
                        : undefined,
                  }}
                >
                 
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                 <Typography >
                    {tier.minititle}
                  </Typography>
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color:
                          tier.title === 'Premium'
                            ? 'primary.light'
                            : 'primary.main',
                      }}
                    />
                    <Typography
                      component="text"
                      variant="subtitle2"
                      sx={{
                        color:
                          tier.title === 'Premium'
                            ? 'primary.contrastText'
                            : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                {/* <Button
                  fullWidth
                  // variant={tier.buttonVariant as 'outlined' | 'contained'}
                  component="a"
                  href="/material-ui/getting-started/templates/checkout/"
                  target="_blank"
                >
                </Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <h1>Not Sure Which Plan is Right for You?</h1>
      <Typography variant="body1" color="text.secondary" textAlign={"center"}>
            <h2> Get in touch with us to discuss your specific needs and find the perfect plan for your business.</h2>
<br />
<AnimatedContactUs
    ref={ref}
    style={contactUsStyle} // Apply the default style
  >
<Button variant="contained"  sx={{
    background: (theme) =>
                          theme.palette.mode === 'light' ? '' : 'none',
                          mt: 4,
                          flexShrink: 0 }}
                          onClick={() => scrollToSection('talktous')}> 
  
    Contact us for pricing
    </Button>
  </AnimatedContactUs>

        </Typography>
        
    </Container>


  );
}