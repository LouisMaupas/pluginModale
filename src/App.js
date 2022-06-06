import React from "react";
import ModalApp from "./ModalApp";

function App() {
  return (
    <>
      {/* On a un seul composant pour le bouton et la modal.
    Et ce bouton prends en props tous les paramètres utiles pour afficher et configurer la modal et ce bouton */}
      <ModalApp
        buttonStyle="Le css doit passer par les props"
        buttonText="Ouvrir modale"
        modalMessage="ceci est un test"
      />
    </>
  );
}

export default App;
