import styles from './infoProducts.module.css'




export const InfoProducts = ({ place, soldOut, suggest }) => {

  return (
    <div className={styles.conteListProducts}>
      <div>
        <h3>Agotados-</h3>
        {soldOut.map(product => {
          if (product.place === place) {
            return <p>{product.productName}</p>
          }
        })}
      </div>
      <div>
        <h3>-Sugeridos</h3>
        {suggest.map(product => {
          if (product.place === place) {
            return <p>{product.productName}</p>
          }
        })}
      </div>
    </div>
  )
}
