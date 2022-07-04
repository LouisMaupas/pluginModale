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
  z-index: 1000;
`;

const Wrapper = styled.div`
  height: 75px;
  width: 500px;
  background-color: white;
  border: solid 1px black;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  display: flex;
  justify-content: center;
`;

const ImgBox = styled.div`
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  & :hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

const Text = styled.div`
  align-self: center;
`;

const Modal = (props) => {
  const { display, setDisplayTo, message } = props;
  return (
    <>
      {display ? (
        <>
          <Backgroud onClick={() => setDisplayTo(false)} />
          <Wrapper>
            <Text> {message} </Text>
            <ImgBox>
              <img
                src={close}
                onClick={() => setDisplayTo(false)}
                alt="close button"
              />
            </ImgBox>
          </Wrapper>
        </>
      ) : null}
    </>
  );
};

export default Modal;
