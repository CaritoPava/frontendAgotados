import styles from './infoProducts.module.css'




export const InfoProducts = ({ place, soldOut, suggest }) => {

  return (
    <div className={styles.conteListProducts}>
      <div className={styles.conteProducts}>
        <h3 className={styles.titleList}>Agotados</h3>
        {soldOut.map((product, idx) => {
          if (product.place === place) {
            return <p key={idx} >{product.productName}</p>
          }
        })}
      </div>
      <div className={styles.conteProducts}>
        <h3 className={styles.titleList}>Sugeridos</h3>
        {suggest.map((product, idx) => {
          if (product.place === place) {
            return <p key={idx}>{product.productName}</p>
          }
        })}
      </div>
    </div>
  )
}
