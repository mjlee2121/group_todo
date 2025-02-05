import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(0);
  const navigate = useNavigate()

  const messages = ['Hello there,', 'Welcome to my Todo App', 'Anything\'s better doing together'];
  
  useEffect(() => {
    document.body.style.backgroundColor = '#8796b5';  // Iceblue color

    return () => {
      document.body.style.backgroundColor = '';  // Reset background when the component unmounts
    };
  }, []);

  useEffect(() => {
    if (step < messages.length) {
      let currentMessage = '';
      let charIndex = 0;

      const interval = setInterval(() => {
        currentMessage += messages[step][charIndex];
        setMessage(currentMessage);
        charIndex++;

        if (charIndex === messages[step].length) {
          clearInterval(interval);
          setTimeout(() => setStep((prevStep) => prevStep + 1), 1000);
        }
      }, 100);

      return () => clearInterval(interval);
    } else {
      setTimeout(() => navigate('/home'), 1000); 
    }
  }, [step, navigate]);

  return (
    <div style={style.container}>
      <div style={style.messageStyle}>
        {message}
      </div>
    </div>
  );
};

const style={
  container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    textAlign: 'center',
  },
  messageStyle:{
    fontFamily:'Arial, Helvetica, sans-serif',
    fontSize: '80px', 
    font: 'white',
    fontWeight: 'bold' 
  }
  
}

export default LandingPage;
