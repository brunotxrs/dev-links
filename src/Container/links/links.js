import React, { useContext } from "react";
import '../../index.css'
import './links.css'
import { ModeContext } from '../switch/mode-context'



function Links() {

    const { classeAdicional } = useContext(ModeContext)

    return(

        <ul className="link-container">
            <li className={`link-box ${classeAdicional}`}>
                <a className={`link-text ${classeAdicional}`} href="https://app.rocketseat.com.br/journey/discover/contents" target="_blank" rel="noopener noreferrer">
                Inscreva-se no NLW
                </a>
            </li>

            <li className={`link-box ${classeAdicional}`}>
                <a className={`link-text ${classeAdicional}`} href="https://app.rocketseat.com.br/me/bruno-teixeira" target="_blank" rel="noopener noreferrer" >
                Baixe meu e-book
                </a>
            </li>

            <li className={`link-box ${classeAdicional}`}>
                <a className={`link-text ${classeAdicional}`} href="https://github.com/brunotxrs?tab=repositories" target="_blank" rel="noopener noreferrer">
                Veja meu portfólio
                </a>
            </li>

            <li className={`link-box ${classeAdicional}`}>
                <a className={`link-text ${classeAdicional}`} href="https://www.rocketseat.com.br/" target="_blank" rel="noopener noreferrer">
                Conheça o Explorer
                </a>
            </li>
        </ul>
    )
}

export default Links;