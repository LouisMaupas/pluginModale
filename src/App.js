import React from "react";
import ModalApp from "./ModalApp";

function App() {
  return (
    <>
      {/* On a un seul composant pour le bouton et la modal.
          Le bouton prends en props tous les paramètres utiles pour afficher et configurer la modal et ce bouton */}
      <ModalApp
        buttonStyle="CSS du bouton"
        buttonText="Texte du bouton"
        modalMessage="Texte du modal"
      />
    </>
  );
}

export default App;
