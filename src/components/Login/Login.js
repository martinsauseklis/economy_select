import React from 'react';
import { loginStyle, formStyle, inputStyle, h2Style, labelStyle, Input } from './loginStyle'

 const Login = (props) => {
    return (
        <div className="Login" style={loginStyle}>
            <div>
                
                <form style={formStyle}>
                    <h2 style={h2Style}>NMIV & MS3</h2>
                    <div>
                        <label style ={labelStyle} for="username">USERNAME:</label>
                        <input style={inputStyle} type="text" id="username" placeholder='Enter username'></input>
                    </div>
                    <div>
                        <label style ={labelStyle} for="password">PASSWORD:</label>
                        <input style={inputStyle} type="password" id="password" placeholder='Enter password'></input>
                    </div>
                    <h2 style={{...h2Style, marginTop: 17}}>SHERLOC & OCNT</h2>
                    <div>
                        <label style ={labelStyle} for="username1">USERNAME:</label>
                        <input style={inputStyle} type="text" id="username1" placeholder='Enter username'></input>
                    </div>
                    <div>
                        <label style ={labelStyle} for="password1">PASSWORD:</label>
                        <input style={inputStyle} type="password" id="password1" placeholder='Enter password'></input>
                    </div>
                    <Input >SAVE & GO BACK</Input>
                    
                </form>
            </div>
        </div>
    );
}

export default Login