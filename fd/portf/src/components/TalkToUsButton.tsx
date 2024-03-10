// Frontend component for the "Talk to us" button
import React from 'react';
import axios from 'axios';

const TalkToUsButton = () => {
  const handleClick = async () => {
    try {
      // Call the serverless function when the button is clicked
      await axios.post('/api/talk-to-us');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <button onClick={handleClick}>Talk to us</button>
  );
};

export default TalkToUsButton;
