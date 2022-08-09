import React, { useState } from 'react'
import { BasicModal } from './BasicModal'
import { BsHouseDoor } from 'react-icons/bs'
import img from '../assets/2085.jpg'
import { ButtonConfirm, ButtonSelect, ContendButton, ImgModal, ModalIcon, ModalTitle } from './modalStyled'


export const SelectPDV = ({ setViewPDV, viewPDV, onClick }) => {
  console.log(viewPDV, "viewPDV")

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleDisplayModal = () => {
    setIsModalVisible(prevState => !prevState)
  }

  return (
    <div>
      <h6 onClick={handleDisplayModal}  >
        <ModalIcon><BsHouseDoor /></ModalIcon>
      </h6>
      {isModalVisible && (
        <BasicModal
          onClose={handleDisplayModal}
          isVisible={isModalVisible}
        >
          <ModalTitle>SELECCIONA LOS PUNTOS DE VENTA QUE DESEAS VER</ModalTitle>
          <ContendButton>
            <ImgModal src={img} alt="" />

            <ButtonSelect onClick={onClick}>Circunvalar</ButtonSelect>
            <ButtonSelect>Av 30 de Agosto</ButtonSelect>
            <ButtonSelect>Portal de Cerritos</ButtonSelect>
            <ButtonSelect>Ciudad Victoria</ButtonSelect>
            <ButtonSelect>Unicentro</ButtonSelect>
            <ButtonSelect>Mall Plaza (Manizales)</ButtonSelect>
            <ButtonSelect>Parque Arboleda</ButtonSelect>
            <ButtonConfirm>Confirmar</ButtonConfirm>
          </ContendButton>


        </BasicModal>
      )}
    </div>
  )
}


