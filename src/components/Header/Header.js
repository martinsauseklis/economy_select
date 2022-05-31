import React from 'react';

import { headerStyle, logoStyle, loginOptionsStyle, backStyle } from "./headerStyle"
import Logo from '../../files/logo_157x35.png';
import LoginOptions from '../../files/loginOptions.png';
import Back from '../../files/back.png'
import { Link } from "react-router-dom";

 const Header = props => {

    return (
        <div className="Header" style={headerStyle}>
            <Link to="/"><img alt="back" style={backStyle} src={Back} /></Link>
            <img alt="DHL logo" style={logoStyle} src={Logo} />
            <Link to="/login"><img alt='login' style={loginOptionsStyle} src={LoginOptions} /></Link>
        </div>
    )
}

export default Header;