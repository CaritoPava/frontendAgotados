import styles from './card.module.css'
import { InfoDeliveryPromise } from './InfoDeliveryPromise'
import { InfoGeneral } from './InfoGeneral'
import { InfoProducts } from './InfoProducts'
import arrayPDVS from '../infoData/arrayPDVS'



export const Card = ({ infoProducts }) => {
  const PDVS = arrayPDVS
  const { idPDv, namePDV, products } = infoProducts[0]
  console.log(namePDV)
  console.log(products)
  console.log(infoProducts, 'infoProducts')


  return (
    <>
      {(namePDV === PDVS[0]) ?
        <div className={styles.contendCard1}>
          <InfoGeneral namePDV={namePDV} />
          <InfoDeliveryPromise />
          <InfoProducts products={products} />
        </div>
        :
        null
      }
      {(namePDV === PDVS[1]) ?
        <div className={styles.contendCard2}>
          <InfoGeneral namePDV={namePDV} />
          <InfoDeliveryPromise />
          <InfoProducts products={products} />
        </div>
        :
        null
      }
      {(namePDV === PDVS[2]) ?
        <div className={styles.contendCard3}>
          <InfoGeneral namePDV={namePDV} />
          <InfoDeliveryPromise />
          <InfoProducts products={products} />
        </div>
        :
        null
      }
      {(namePDV === PDVS[3]) ?
        <div className={styles.contendCard4}>
          <InfoGeneral namePDV={namePDV} />
          <InfoDeliveryPromise />
          <InfoProducts products={products} />
        </div>
        :
        null
      }
      {(namePDV === PDVS[4]) ?
        <div className={styles.contendCard5}>
          <InfoGeneral namePDV={namePDV} />
          <InfoDeliveryPromise />
          <InfoProducts products={products} />
        </div>
        :
        null
      }
      {(namePDV === PDVS[5]) ?
        <div className={styles.contendCard6}>
          <InfoGeneral namePDV={namePDV} />
          <InfoDeliveryPromise />
          <InfoProducts products={products} />
        </div>
        :
        null
      }
      {(namePDV === PDVS[6]) ?
        <div className={styles.contendCard7}>
          <InfoGeneral namePDV={namePDV} />
          <InfoDeliveryPromise />
          <InfoProducts products={products} />
        </div>
        :
        null
      }

    </>
  )
}


