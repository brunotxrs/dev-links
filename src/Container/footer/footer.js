import React, { useContext } from "react";
import { ModeContext } from "../switch/mode-context";
import './footer.css';
import '../../index.css';

function Footer() {

    const { classeAdicional } = useContext(ModeContext);

    return (
        <div className={`container-footer ${classeAdicional}`}>
            <p className={`box-footer ${classeAdicional}`}>
                Feito com ♥ por <a href="https://github.com/brunotxrs" target="_blank" rel="noopener noreferrer">@Bruno Teixeira</a>
            </p>
        </div>
    )

}

export default Footer;