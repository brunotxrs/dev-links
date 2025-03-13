import React, { useContext } from "react";
import { ModeContext } from "../switch/mode-context";

import './social-links.css'
import '../../index.css'

function SocialLinks() {

    const { classeAdicional } = useContext(ModeContext)

    return(
        <div className="social-links-container">
            <ul>
                <li className={`box-social ${classeAdicional}`}>
                    <a href="https://github.com/brunotxrs" target="_blank" rel="noopener noreferrer" className={`social ${classeAdicional}`}><ion-icon name="logo-github"></ion-icon></a>
                </li>

                <li className={`box-social ${classeAdicional}`}>
                    <a href="https://www.instagram.com/bruno_txrs/" target="_blank" rel="noopener noreferrer" className={`social ${classeAdicional}`}><ion-icon name="logo-instagram"></ion-icon></a>
                </li>

                <li className={`box-social ${classeAdicional}`}>
                    <a href="https://www.youtube.com/@bruno_txrs" target="_blank" rel="noopener noreferrer" className={`social ${classeAdicional}`}><ion-icon name="logo-youtube"></ion-icon></a>
                </li>

                <li className={`box-social ${classeAdicional}`}>
                    <a href="https://www.linkedin.com/in/brunotxrs" target="_blank" rel="noopener noreferrer" className={`social ${classeAdicional}`}><ion-icon name="logo-linkedin"></ion-icon></a>
                </li>
            </ul>

        </div>
    )
}

export default SocialLinks;