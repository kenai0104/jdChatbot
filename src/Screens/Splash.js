import React, { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom'; 
import animationData from '../assets/animation.json';
import '../css/SplashScreen.css';

const Splash = () => {
  const navigate = useNavigate(); 
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 4000); 

    return () => clearTimeout(timer); 
  }, [navigate]); 

  return (
    <div className="splash-container">
      <div className="splash-content">
        <Player
          autoplay
          loop
          speed={2}
          src={animationData}
          style={{ height: '150px', width: '150px' }}
        />
        <div className="animated-text">
          <span style={{ animationDelay: '0.3s' }}>Hi !</span>
          <span style={{ animationDelay: '0.8s' }}>I'm JD.</span>
        </div>
      </div>
    </div>
  );
};

export default Splash;
