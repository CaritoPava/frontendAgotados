import React from 'react'
import { InfoDeliveryPromise } from './components/InfoDeliveryPromise'
import styles from './barInfoDelivery.module.css'

export const BarInfoDelivery = ({ infoPlaces }) => {

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
      <h2>Tiempos y ocupacion</h2>
      <div className={styles.card}>
        <h4 className={styles.namePDV}>{places.circunvalar}</h4>
        <InfoDeliveryPromise infoPlaces={infoPlaces} />
      </div>
      <div className={styles.card}>
        <h4 className={styles.namePDV}>{places.treinta}</h4>
        <InfoDeliveryPromise infoPlaces={infoPlaces} />
      </div>
      <div className={styles.card}>
        <h4 className={styles.namePDV}>{places.cerritos}</h4>
        <InfoDeliveryPromise infoPlaces={infoPlaces} />
      </div>
      <div className={styles.card}>
        <h4 className={styles.namePDV}>{places.arboleda}</h4>
        <InfoDeliveryPromise infoPlaces={infoPlaces} />
      </div>
      <div className={styles.card}>
        <h4 className={styles.namePDV}>{places.victoria}</h4>
        <InfoDeliveryPromise infoPlaces={infoPlaces} />
      </div>
      <div className={styles.card}>
        <h4 className={styles.namePDV}>{places.manizales}</h4>
        <InfoDeliveryPromise infoPlaces={infoPlaces} />
      </div>
      <div className={styles.card}>
        <h4 className={styles.namePDV}>{places.unicentro}</h4>
        <InfoDeliveryPromise infoPlaces={infoPlaces} />
      </div>
      <div className={styles.card}>
        <h4 className={styles.namePDV}>{places.armenia}</h4>
        <InfoDeliveryPromise infoPlaces={infoPlaces} />
      </div>
      <div className={styles.card}>
        <h4 className={styles.namePDV}>{places.pereiraPlaza}</h4>
        <InfoDeliveryPromise infoPlaces={infoPlaces} />
      </div>
    </div>
  )
}
