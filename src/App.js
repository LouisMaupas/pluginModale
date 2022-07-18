import React from "react";
import ModalApp from "./lib/ModalApp";

function App() {
  return (
    <ModalApp
      buttonStyle="CSS du bouton"
      buttonText="Texte du bouton"
      modalMessage="Texte du modal"
      openModal={true}
    />
  );
}

export default App;
