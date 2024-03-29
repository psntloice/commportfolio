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
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
 
  const [emailData, setEmailData] = useState({
    talkmail: '',
    note: '',
  });
  const [sending, setSending] = useState(false);
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showConfirmationAlert = () => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you want to subscribe? You will receive emails from us',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
                       const validation = validateEmail(email); // Validate the email
            if (validation) {
              try {
              // Send a POST request to the serverless function
              await axios.post('/api/subscribe', { email });
                alert('Successfully subscribed!');
                setEmail('');
              } catch (error) {
                alert('Failed to subscribe. Please try again later.');
                console.error('Subscription failed:', error);
              }
            } else {
              alert('Invalid email. Please provide a valid email address.');
            }
           
        
            setEmail('');
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  const sendto  = async () => {
    setSending(true);     

    const response = await axios.post('/api/sendEmail', emailData);
    alert('Message sent successfully!');
          setEmailData({note: '', talkmail: ''});         
          setSending(false);
    console.log('Email sent');
  }
  
  const handleTalkToUsClick = async () => {
    const { talkmail: tm } = emailData;
        const validation = validateEmail(tm); // Validate the email
    if (validation) {     
              try {
              // Call the serverless function when the button is clicked
              sendto();
         } catch (error) {
                                console.error('Failed to send message:', error);
                alert('Failed to send message. Please try again later.');
              }
            } else {
              console.log(email);
              alert('Invalid email. Please provide a valid email address.');
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
            marginBottom: '4px',
          }}
          mb={2}
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
            
              
      <Button
        variant="contained"
        color="primary"
        onClick={showConfirmationAlert}
        sx={{ flexShrink: 0 }}
      >
        Subscribe
      </Button>
  
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
                type="email"
                name="talkmail"
                value={emailData.talkmail}
                onChange={handleChange} // Update state on change
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
                name="note"
        value={emailData.note}
        onChange={handleChange}// Update state on change
                inputProps={{
                  autocomplete: 'off',
                  ariaLabel: 'Enter your note',
                }}
              />
              <Button variant="contained"  onClick={handleTalkToUsClick} sx={{ flexShrink: 0 }} >
      Talk to us
    </Button>
    {sending && <p>Sending...</p>}
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
       
      </Box>
    </Container>
  );
}