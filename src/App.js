import './App.css';
import React, { useContext, useEffect} from 'react';
import Profile from './Container/profile/profile';
import Switch from './Container/switch/switch';
import { ModeContext} from './Container/switch/mode-context'
import Links from './Container/links/links';
import SocialLinks from './Container/social-links/social-links';
import Footer from './Container/footer/footer';

function App() {

  const { classeAdicional } = useContext(ModeContext);

  useEffect(() => {
    document.body.className = classeAdicional;
  }, [classeAdicional]);


  return (
    <div className='App'>
        <Profile />
        <Switch />
        <Links />
        <SocialLinks />
        <Footer />
      </div>
  );
}

export default App;
