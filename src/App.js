import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './Screens/Splash';
import Home from './Screens/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash/>} />
        <Route path="/home" element={<Home/>} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
