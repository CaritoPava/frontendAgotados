import React, { useState } from 'react'
import { BasicModal } from './BasicModal'
import { BsHouseDoor } from 'react-icons/bs'
import img from '../assets/2085.jpg'
import { ButtonSelect, ButtonSelectAll, ContendButton, ImgModal, ModalIcon, ModalTitle } from './modalStyled'



export const SelectPDV = ({ setViewPDV, viewPDV, handleViewPDV, handleViewPDVAll, isButtonSelected, setIsBUttonSelecte, isSelectAllPDV }) => {

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
            <ButtonSelect isButtonSelected={isButtonSelected.treinta} onClick={() => handleViewPDV('treinta')}>Avenida 30 de Agosto</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.cerritos} onClick={() => handleViewPDV('cerritos')}>Portal de Cerritos</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.victoria} onClick={() => handleViewPDV('victoria')}>Victoria</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.unicentro} onClick={() => handleViewPDV('unicentro')}>Unicentro</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.mallPlaza} onClick={() => handleViewPDV('mallPlaza')}>Mall Plaza</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.arboleda} onClick={() => handleViewPDV('arboleda')}>Parque Arboleda</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.pereiraPlaza} onClick={() => handleViewPDV('pereiraPlaza')}>Pereira Plaza</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.privilegio} onClick={() => handleViewPDV('privilegio')}>Privilegio Mall Armenia</ButtonSelect>
            <ButtonSelect isButtonSelected={isButtonSelected.bodega} onClick={() => handleViewPDV('bodega')}>Bodega</ButtonSelect>
            <ButtonSelectAll isButtonSelected={isSelectAllPDV} onClick={() => handleViewPDVAll()} >All PDVs</ButtonSelectAll>
            {/* <ButtonSelect  onClick={() => handleViewPDVAll()} ><ButtonSelect> */}
            {/* <ButtonSelect isButtonSelected={isButtonSelected.allPDVs} onClick={() => handleViewPDV("allPDVs")}>SELECIONAR TODO</ButtonSelect> */}

          </ContendButton>
        </BasicModal>
      )}
    </div>
  )
}


