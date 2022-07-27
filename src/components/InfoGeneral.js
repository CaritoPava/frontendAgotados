import styles from './infoGeneral.module.css'
import logo from "../img/logo.png"

export const InfoGeneral = ({ namePDV }) => {
  console.log(namePDV, 'namePDV')
  return (
    <div className={styles.contendInfo}>
      <div className={styles.logoHour}>
        <img src={logo} alt="Logo" />
        {/* <p> 01:07 PM</p> */}
      </div>
      <div className={styles.titleReport}>
        {/* <h1>REPORTE PROMESA DE ENTREGA AGOTADOS Y SUGERIDOS</h1> */}
        <h2>{namePDV}</h2>
      </div>
    </div>
  )
}
