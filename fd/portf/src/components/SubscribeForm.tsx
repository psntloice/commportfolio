import React, { useState } from 'react';
import axios from 'axios';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e:any) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}
