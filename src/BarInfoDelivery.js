import React, { useState } from 'react'
import { InfoDeliveryPromise } from './components/InfoDeliveryPromise'
import styles from './barInfoDelivery.module.css'

export const BarInfoDelivery = ({ infoPlaces, isButtonSelected, isPDVSelected }) => {



  const places = {
    circunvalar: "CIRCUNVALAR",
    treinta: "AV 30 DE AGOSTO",
    cerritos: "P DE CERRITOS",
    arboleda: "PARQUE ARBOLEDA",
    victoria: "CIUDAD VICTORIA",
    manizales: "MANIZALES",
    unicentro: "UNICENTRO",
    armenia: "ARMENIA",
    pereiraPlaza: "PEREIRA PLAZA"
  }
  return (
    <div className={styles.contedBar}>

      <h2>Tiempos y ocupación</h2>
      {!isPDVSelected && <h3 className={styles.mesajeNoPDVSelected}>No tienes puntos de venta selecionados</h3>}
      {
        isButtonSelected.circunvalar && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.circunvalar}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"circunvalar"} />
          </div>
        )
      }

      {
        isButtonSelected.treinta && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.treinta}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"treinta"} />
          </div>
        )
      }

      {
        isButtonSelected.cerritos && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.cerritos}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"cerritos"} />
          </div>
        )
      }

      {
        isButtonSelected.arboleda && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.arboleda}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"arboleda"} />
          </div>
        )
      }

      {
        isButtonSelected.victoria && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.victoria}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"victoria"} />
          </div>
        )
      }

      {
        isButtonSelected.manizales && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.manizales}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"manizales"} />
          </div>
        )
      }

      {
        isButtonSelected.unicentro && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.unicentro}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"unicentro"} />
          </div>
        )
      }

      {
        isButtonSelected.armenia && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.armenia}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} place={"armenia"} />
          </div>
        )
      }

      {
        isButtonSelected.pereiraPlaza && (
          <div className={styles.card}>
            <h4 className={styles.namePDV}>{places.pereiraPlaza}</h4>
            <InfoDeliveryPromise infoPlaces={infoPlaces} />
          </div>
        )
      }

    </div>
  )
}
