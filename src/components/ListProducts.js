import styles from './infoProducts.module.css'

export const ListProducts = ({ id, name, state }) => {
  return (
    <div>
      <ul>
        {
          !state ?
            <li className={styles.productsSoldOut} key={id}> {name}</li>
            :
            <li className={styles.productsSuggest} key={id}> {name}</li>
        }
      </ul>

    </div>
  )
}
