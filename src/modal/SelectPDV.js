import React, { useState } from 'react'
import { BasicModal } from './BasicModal'
import { BsHouseDoor } from 'react-icons/bs'
import img from '../assets/2085.jpg'
import { ButtonConfirm, ButtonSelect, ContendButton, ImgModal, ModalIcon, ModalTitle } from './modalStyled'


export const SelectPDV = ({ setViewPDV, viewPDV, handleViewPDV, isButtonSelected, setIsBUttonSelecte }) => {
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
          isVisible={isModalVisible}
          onClose={handleDisplayModal}
        >
          <ModalTitle>SELECCIONA LOS PUNTOS DE VENTA QUE DESEAS VER</ModalTitle>
          <ContendButton>
            <ImgModal src={img} alt="" />
            <ButtonSelect isButtonSelected={isButtonSelected.circunvalar} onClick={() => handleViewPDV('circunvalar')}>Circunvalar</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.treinta} onClick={() => handleViewPDV('treinta')}>Av 30 de Agosto</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.cerritos} onClick={() => handleViewPDV('cerritos')}>Portal de Cerritos</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.victoria} onClick={() => handleViewPDV('victoria')}>Ciudad Victoria</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.unicentro} onClick={() => handleViewPDV('unicentro')}>Unicentro</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.manizales} onClick={() => handleViewPDV('manizales')}>Mall Plaza (Manizales)</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.arboleda} onClick={() => handleViewPDV('arboleda')}>Parque Arboleda</ButtonSelect>
          </ContendButton>


        </BasicModal>
      )}
    </div>
  )
}


