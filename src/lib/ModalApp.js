import React, { useState } from "react";
import ModalComponent from "./ModalComponent";

function ModalApp({ buttonStyle, modalMessage, buttonText, openModal }) {
  const [display, setDisplay] = useState(false);
  return (
    <>
      {/* La modale modifie son état par l'intérmédiaire du state setDisplay de ModalApp */}
      <ModalComponent
        message={modalMessage}
        display={display}
        setDisplayTo={setDisplay}
      />
      {/* Cliquer sur le bouton modifie le state de ModalApp qui sera passé en props à la modale */}
      <button
        className={buttonStyle}
        onClick={() => {
          setDisplay(openModal);
        }}
      >
        {buttonText}
      </button>
    </>
  );
}

export default ModalApp;
