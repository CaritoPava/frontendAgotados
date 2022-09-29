import React, { useState } from 'react'
import { InfoDeliveryPromise } from './components/InfoDeliveryPromise'
import styles from './barInfoDelivery.module.css'
import { namesPDVS } from './helpers/namesPDVS'

export const BarInfoDelivery = ({ infoPlaces, isButtonSelected, isPDVSelected, isSelectAllPDV }) => {
  const places = namesPDVS

  return (
    <div className={styles.contedBar}>

      <h2>Tiempos y ocupación</h2>
      {(!isPDVSelected && !isSelectAllPDV) && <h3 className={styles.mesajeNoPDVSelected}>No tienes puntos de venta selecionados</h3>}
      {
        ((isButtonSelected.circunvalar) || isSelectAllPDV) && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.circunvalar}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"circunvalar"} />
          </div>
        )
      }

      {
        (isButtonSelected.treinta || isSelectAllPDV) && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.treinta}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"treinta"} />
          </div>
        )
      }

      {
        (isButtonSelected.cerritos || isSelectAllPDV) && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.cerritos}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"cerritos"} />
          </div>
        )
      }

      {
        (isButtonSelected.arboleda || isSelectAllPDV) && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.arboleda}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"arboleda"} />
          </div>
        )
      }

      {
        (isButtonSelected.victoria || isSelectAllPDV) && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.victoria}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"victoria"} />
          </div>
        )
      }

      {
        (isButtonSelected.mallPlaza || isSelectAllPDV) && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.mallPlaza}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"mallPlaza"} />
          </div>
        )
      }

      {
        (isButtonSelected.unicentro || isSelectAllPDV) && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.unicentro}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"unicentro"} />
          </div>
        )
      }

      {
        (isButtonSelected.privilegio || isSelectAllPDV) && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.privilegio}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"privilegio"} />
          </div>
        )
      }

      {
        (isButtonSelected.pereiraPlaza || isSelectAllPDV) && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.pereiraPlaza}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} />
          </div>
        )
      }
      {
        (isButtonSelected.bodega || isSelectAllPDV) && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.bodega}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} />
          </div>
        )
      }

    </div>
  )
}
