import React from "react";

import {ModalOverlay, ModalContent} from './style.js';


const ModalAdicionarProduto = ({onClose}) => {

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };

      return (
        <>
            <ModalOverlay onClick={handleOverlayClick}>

                <ModalContent></ModalContent>

            </ModalOverlay>
        </>
      )

}