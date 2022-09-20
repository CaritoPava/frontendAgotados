import React from 'react'
import { BackDrop, ButtonConfirm, ContendButton, Modal } from './modalStyled'
import ReactDOM from 'react-dom'


export const BasicModal = ({ isVisible, onClose, children }) => {

  const portalEL = document.getElementById('modal-box')
  if (isVisible) {
    return (
      <div >{
        ReactDOM.createPortal(<BackDrop>
          <Modal>
            {children}
            <ContendButton>

              <ButtonConfirm onClick={onClose} >Confirmar</ButtonConfirm>
            </ContendButton>
          </Modal>
        </BackDrop>, portalEL)}
      </div>
    )
  }
}
