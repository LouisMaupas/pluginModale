import React from "react";
import ModalApp from "./lib/ModalApp";

function App() {
  return (
    <ModalApp
      buttonStyle="d-none"
      buttonText="Texte du bouton"
      modalMessage="Texte du modal"
      openModal={true}
    />
  );
}

export default App;
