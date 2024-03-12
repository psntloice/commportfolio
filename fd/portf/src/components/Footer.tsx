import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

import axios from 'axios';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="#">Qrevv&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}



export default function Footer() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null); // State to track email validity
  const [subscribed, setSubscribed] = useState(false); // State to track subscription status

  const SubscribeClick = async (e:any) => {
    e.preventDefault();

    try {
      // Send a POST request to the serverless function
      await axios.post('/api/subscribe', { email });
      alert('Successfully subscribed!');
      setEmail('');
    } catch (error) {
      alert('Failed to subscribe. Please try again later.');
      console.error('Subscription failed:', error);
    }
  };

  const handleTalkToUsClick = async () => {
    try {
      // Call the serverless function when the button is clicked
      await axios.post('../utils/sendEmail');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };
  


  const validateEmail = (email: string | undefined): RegExpMatchArray | null => {
    if (!email) return null; // handle case where email is undefined

    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleClick = () => {
    const validation = validateEmail(email);
    setIsValid(validation !== null);
    if (validation) {
      console.log('Subscribing user with lemail:');
      // Perform subscription logic here, for example, sending a request to your backend
      // You can use fetch or an API library like Axios for making HTTP requests
      // Once the subscription is successful, update the state to reflect the subscription status
      subscribeUser(email); // This is a placeholder function, implement your subscription logic here
    }
    else{
      console.log('Provide correct email');
    }
  };

  const subscribeUser = (email: string) => {
    // Placeholder function for subscription logic
    console.log('Subscribing user with email:', email);
    // Assume the subscription is successful for demonstration purposes
    setSubscribed(true);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
       
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            Width: { xs: '100%', sm: '30%' },
          }}
        >
        <Typography variant="body2" color="text.dark" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for updates.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your email address"
                placeholder="Your email address"
                value={email}
        // onChange={handleInputChange}
        onChange={(e) => setEmail(e.target.value)}

                inputProps={{
                  autocomplete: 'off',
                  ariaLabel: 'Enter your email address',
                }}
              />
            
              
            {/* <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      <Button
        variant="contained"
        color="primary"
        onClick={SubscribeClick}
        sx={{ flexShrink: 0 }}
      >
        Subscribe
      </Button>
      {/* {isValid !== null && (
        <p>{isValid ? 'Valid email address' : 'Invalid email address'}</p>
      )}
      {subscribed && <p>Subscribed successfully!</p>} */}
            </Stack>
       </Box>
       <Box
        id="talktous"
          sx={{
            display: 'flex',
            flexDirection: 'column',
          
            gap: 2,
            Width: { xs: '100%', sm: '50%' },
            minWidth: { xs: '100%', sm: '55%' },
          }}
          
        >    
       <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '0.5px solid',
                  borderColor: 'primary.main',
                  backgroundColor: 'primary',
                  color:'primary.contrastText',
                }}
              >
       
          
            
            <Typography variant="body2" color="text.dark" fontWeight={900} fontSize="100%" mb={2} gutterBottom>
Want To Reach Us?            </Typography>
            <Stack direction="row" spacing={1} useFlexGap mb={2}>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autocomplete: 'off',
                  ariaLabel: 'Enter your email address',
                }}
              />
              </Stack>
              <Stack direction="column" spacing={1} useFlexGap mb={2}>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="medium"
                variant="outlined"
                fullWidth
                aria-label="Enter your note"
                placeholder="Your note"
                multiline={true}  // Add this line
                rows={4} 
                inputProps={{
                  autocomplete: 'off',
                  ariaLabel: 'Enter your note',
                }}
              />
              <Button variant="contained"  onClick={handleTalkToUsClick} sx={{ flexShrink: 0 }} >
      Talk to us
    </Button>
    </Stack>           

     </Stack>
     </Box> 
     
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
            minWidth: {  sm: '5%' },

          }}
        >
          <Typography variant="body2" color="text.dark" fontWeight={600}>
            Product
          </Typography>
          <Link color="text.secondary" href="#">
            Features
          </Link>
         
          <Link color="text.secondary" href="#">
            Highlights
          </Link>
          <Link color="text.secondary" href="#">
            Pricing
          </Link>
          <Link color="text.secondary" href="#">
            About us
          </Link>
          <Link color="text.secondary" href="#">
            Terms
          </Link>
          
          <Link color="text.secondary" href="#">
            Contact
          </Link>
        </Box>
       
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ ml: '-15px' }} mb={1}>
              <img
                src={
                  'images/favicon.png'
                }
                alt="Q"
              />
            </Box>
        <div>
          
          <Copyright />
        </div>
        {/* <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="#"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="#"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="#"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack> */}
      </Box>
    </Container>
  );
}