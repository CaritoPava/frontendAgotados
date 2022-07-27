import styles from './infoDeliveryPromise.module.css'
import { FaMotorcycle } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { BiCake } from 'react-icons/bi'
import { MdMenuBook } from 'react-icons/md'

export const InfoDeliveryPromise = () => {
  return (
    <div className={styles.contendInfodelivery}>
      <IconContext.Provider value={{ className: styles.reacticons }}>
        <div className={styles.contePromise}>
          <h3>< FaMotorcycle /></h3>
          <p> 2h y 7 min</p>
          <p><BiCake /> </p>
          <p> 80 Min</p>
          <p><MdMenuBook /></p>
          <p>70 Min</p>
        </div>
      </IconContext.Provider>
    </div>
  )
}
