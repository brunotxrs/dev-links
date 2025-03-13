import React, { useContext } from "react";
import { ModeContext } from './mode-context';
import './switch.css';
import '../../index.css';

function Switch() {
  const { classeAdicional, handleClick } = useContext(ModeContext);

  return (
    <div className="container">
      <div className={`box ${classeAdicional}`}>
        <button onClick={handleClick}></button>
      </div>
    </div>
  );
}

export default Switch;