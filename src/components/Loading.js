import styles from './loading.module.css'
import imagen from '../assets/4500_10_01.jpg'

export const Loading = () => {
  return (
    <div className={styles.contentNotSoldout}>
      <img src={imagen} className={styles.imgNotSoldout} />
      <h1 className={styles.textNotSoldout}>No tenemos productos agotados o sugeridos ...</h1>
    </div>
  )
}
