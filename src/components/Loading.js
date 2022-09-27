import styles from './loading.module.css'
import imagen from '../assets/blanco.png'

export const Loading = () => {
  return (
    <div className={styles.contentNotSoldout}>
      <img src={imagen} className={styles.imgNotSoldout} />
      <h1 className={styles.textNotSoldout}>Si te hace feliz a nosotros tambien ♥️ </h1>
    </div>
  )
}
