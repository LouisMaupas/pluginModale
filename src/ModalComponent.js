import React from "react";
import styled from "styled-components";
import close from "./icon-close.svg";

const Backgroud = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    `

const Wrapper = styled.div`
    height: 100%
    width: 100%
    background-color: white;
    border: solid 1px black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `



const Modal = ({ display, message, setDisplayTo }) => {

    <>  
        {display ?
        <>
            <Backgroud onClick={() => setDisplayTo(false)} />
            <Wrapper />
            <div>
                <img src={close} onClick={() => setDisplayTo(false)} alt="close button"/>
                <div> {message} </div>
            </div>
        </>
        :null}


    </>}


export default Modal;