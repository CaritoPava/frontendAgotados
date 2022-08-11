import styles from './loading.module.css'
import imagen from '../assets/4500_10_01.jpg'

export const Loading = () => {
  return (
    <div className={styles.contentNotSoldout}>
      <img src={imagen} className={styles.imgNotSoldout} />
      <h1 className={styles.textNotSoldout}>Si te hace feliz a nosotros tambien ♥️ </h1>
    </div>
  )
}
