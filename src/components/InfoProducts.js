import styles from './infoProducts.module.css'




export const InfoProducts = ({ place, soldOut, suggest }) => {

  return (
    <div className={styles.conteListProducts}>
      <div className={styles.conteProductsSoldOut}>
        {

          soldOut.map((product, idx) => {
            if (product.place === place) {
              return <p key={idx} > {product.productName}</p>
            }
          })
        }
      </div>
      <div className={styles.conteProductsSuggest}>
        {

          suggest.map((product, idx) => {
            if (product.place === place) {
              return <p key={idx}> {product.productName}</p>
            }
          })

        }
      </div>
    </div>
  )
}
