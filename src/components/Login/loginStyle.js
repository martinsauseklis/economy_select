import styled from "styled-components";

export const loginStyle = {
    position: "relative",
    marginTop: 45,
    marginLeft: 0,
    height: "222px",
    width: "410px",
    backgroundColor: "#FFCC00"
}

export const formStyle = {
    position: "relative",
    display: "flex",
    flexFlow: "column nowrap"
}

export const inputStyle = {
    boxSizing: "border-box",
    height: 23,
    width: 171,
    border: "1.5px solid #D40511",
    borderRadius: 26,
    marginLeft: 6
}

export const h2Style = {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "20px",
    lineHeight: "23px",
    color: "#D40511",
    marginTop: 3,
    marginLeft: 18,
    marginBottom:0,
    textAlign: "left"
    
}

export const labelStyle = {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "15px",
    lineHeight: "18px",
    color: "#D40511",
    marginLeft: 58,
    marginTop:6
}

export const Input = styled.button`
position: relative;
width: 170px;
height: 31px;
margin-top: 11px;
margin-left: 121px;
background: linear-gradient(180deg, #FFF0B2 29.23%, rgba(255, 240, 178, 0) 135.38%);
border: 2px solid #D40511;
box-sizing: border-box;
border-radius: 26px;

font-family: 'Roboto';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 21px;
/* identical to box height */

display: flex;
white-space: nowrap;
align-items: center;
text-align: center;
justify-content: center;

color: #D40511;
&:active {
    position: relative;
width: 170px;
height: 31px;
margin-top: 11px;
margin-left: 121px;
background: linear-gradient(180deg, #D40511 29.23%, rgba(255, 240, 178, 0) 135.38%);
border: 2px solid #D40511;
box-sizing: border-box;
border-radius: 26px;

font-family: 'Roboto';
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 21px;
/* identical to box height */

display: flex;
white-space: nowrap;
align-items: center;
text-align: center;
justify-content: center;

color: #FFCC00;
}
`