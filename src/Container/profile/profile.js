import React, { useContext, useState, useEffect } from "react";
import { ModeContext } from '../switch/mode-context';
import './profile.css';
import '../../index.css'
import avatarDark from '../../assets/img/avatar.svg';
import avatarLight from '../../assets/img/avatar-light.svg';

function Profile() {
  const { classeAdicional } = useContext(ModeContext);
  const [avatarSrc, setAvatarSrc] = useState(avatarDark)

  useEffect(() => {
    if(classeAdicional === 'light-mode') {
      setAvatarSrc(avatarLight);
    }else {
      setAvatarSrc(avatarDark);
    };
  }, [classeAdicional])

  return (
    <div className={`profile ${classeAdicional}`}>
      <div className={`img ${classeAdicional}`}>
        <img src={avatarSrc} alt="foto de perfil"></img>
      </div>
      <p className={`text ${classeAdicional}`}>@Bruno Teixeira</p>
    </div>
  );
}

export default Profile;