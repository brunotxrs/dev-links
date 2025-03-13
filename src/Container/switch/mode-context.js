import React, { createContext, useState } from 'react';

export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [classeAdicional, setClasseAdicional] = useState('');

  const handleClick = () => {
    if (classeAdicional === 'light-mode') {
      setClasseAdicional('');
    } else {
      setClasseAdicional('light-mode');
    }
  };

  return (
    <ModeContext.Provider value={{ classeAdicional, handleClick }}>
      {children}
    </ModeContext.Provider>
  );
}