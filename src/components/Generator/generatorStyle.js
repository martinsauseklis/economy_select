import styled from 'styled-components';

export const generatorStyle = {
    position: "relative",
    padding: "0.05px",
    marginTop: 45,
    height: "110px",
    width: "410px",
    backgroundColor: "#FFCC00"
}

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 296px;
    height: 65px;
    margin-left: 57px;
    margin-top: 10px;
    background: linear-gradient(180deg, #FFF0B2 29.23%, rgba(255, 240, 178, 0) 135.38%);
    border: 4px solid #D40511;
    box-sizing: border-box;
    border-radius: 26px;
    &:active {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 296px;
        height: 65px;
        margin-left: 57px;
        margin-top: 10px;
        background: linear-gradient(180deg, #D40511 29.23%, rgba(255, 240, 178, 0) 135.38%);
        border: 4px solid #D40511;
        box-sizing: border-box;
        border-radius: 26px;
    }
    
`
    

export const ButtonText = styled.p`
    position: relative;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    display: flex;
    color: #D40511;
    &:active {
        position: relative;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 35px;
        display: flex;
        color: #FFCC00
    }
`

