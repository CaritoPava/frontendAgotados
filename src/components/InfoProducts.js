import styles from './infoProducts.module.css'
import { ListProducts } from './ListProducts'

const productsSoldOut = [
  {
    id: 1,
    name: 'Fresas',
    state: false
  },
  {
    id: 2,
    name: 'Mandarina',
    state: false
  },
  {
    id: 3,
    name: 'Guacamole',
    state: false
  },
  {
    id: 4,
    name: 'Chicharrines',
    state: false
  },
  {
    id: 5,
    name: 'Chicharrines',
    state: false
  },
  {
    id: 6,
    name: 'Chicharrines',
    state: false
  },
  {
    id: 7,
    name: 'Chicharrines',
    state: false
  },
  {
    id: 8,
    name: 'Chicharrines',
    state: false
  },
  {
    id: 9,
    name: 'Chicharrines',
    state: false
  },
  {
    id: 10,
    name: 'Chicharrines',
    state: false
  },
  {
    id: 11,
    name: 'Chicharrines con queso y papitas',
    state: false
  },
  {
    id: 12,
    name: 'Chicharrines',
    state: false
  },
  {
    id: 13,
    name: 'Chicharrines',
    state: false
  },
  {
    id: 14,
    name: 'Chicharrines',
    state: false
  },

]

const productsSuggested = [
  {
    id: 1,
    name: 'Champiñones',
    state: true
  },
  {
    id: 2,
    name: 'Jalapeños',
    state: true
  },
  {
    id: 3,
    name: 'Queso cuajada',
    state: true
  },

]

export const InfoProducts = ({ products }) => {
  console.log(products, 'products')
  const { id, name, state, classification } = products
  console.log(classification, 'classification')
  return (
    <div className={styles.conteListProducts}>
      <div>
        <h3>Agotados</h3>
        {/* {
          productsSoldOut.map(product => (
            <ListProducts
              key={product.id}
              {...product} />
          )
          )

        } */}

        {
          classification === 'soldOut' ?
            <ListProducts
              key={products.id}
              {...products} />
            :
            null
        }
      </div>
      <div>
        <h3>Sugeridos</h3>
        {
          classification === 'suggest' ?
            <ListProducts
              key={products.id}
              {...products} />
            :
            null
        }
      </div>
    </div>
  )
}
