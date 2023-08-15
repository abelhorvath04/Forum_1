import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

export default function EmailVerify() {

    const handleResendClick = async () => {
        try {
          const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
          const headers = {
            'X-CSRF-TOKEN': csrfToken,
            'Content-Type': 'application/json',
          };
    
          await axios.post('/email/verify', null, { headers });
          alert('Verification link sent!');
        } catch (error) {
          console.error('Error sending verification link:', error);
        }
      };

  return (
    <div>
      <h2>Email Verification</h2>
      <p>Thanks for registering! Before getting started, we need to verify your email address.</p>
      <p>If you did not create an account, no further action is required!</p>
      <br />
      <Button onClick={handleResendClick}>Resend Verification Link</Button>
    </div>
  );

  
}

