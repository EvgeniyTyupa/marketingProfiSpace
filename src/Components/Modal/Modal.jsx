import React from 'react';

import styled from 'styled-components';


const ModalWindow = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: fixed;
    justify-content: center;
    display: flex;
    

    .modal{
        width: 80%;
        height: 365px;
        background-color: #F9FCFF;
        box-shadow: 3px 3px 10px -5px black;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 20px;
        position: relative;
        top: -100px;
    }
    .krest{
        width: 40px;
        height: 50px;
        align-self: flex-end;
        position: relative;
        top: 25px;
        cursor: pointer;
    }
    .krestik{
        width: 40px;
        height: 4px;
        background-color: black;
        border-radius: 10px;
        z-index: 100;
    }
    .one{
        transform: rotate(45deg);
        transform-origin: 14px;
    }
    .two{
        transform: rotate(-45deg);
    }
    .text{
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 1024px){
        position: absolute;
        margin-top: 400px;
    }
    @media screen and (max-width: 700px){
        .modal{
            position: fixed;
            top: 30%;
            z-index: 99999 !important;
        }
    }
`;


const Modal = (props) => {
    
    console.log("modal");

    return(
        <ModalWindow show={props.show} >
            <div className="modal">
                <div className="krest" onClick={()=>props.setShow(!props.show)}>
                    <div className="krestik one"/>
                    <div className="krestik two"/>
                </div>
                <div className="text">
                    <p>{props.text}</p>
                </div>
                
                
            </div>
        </ModalWindow>
    );
}

export default Modal;