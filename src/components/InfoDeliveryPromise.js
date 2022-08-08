import styles from './infoDeliveryPromise.module.css'
import { FcAlarmClock } from 'react-icons/fc'
import { IconContext } from 'react-icons'
import { FcShop } from 'react-icons/fc'

export const InfoDeliveryPromise = ({ place, infoPlaces }) => {

  const promes = 10

  // console.log('esta es la info')

  // console.log(place, 'place!!!!OJO')
  // console.log(infoPlaces, 'Info place!!!!')
  // console.log(infoPlaces.cerritos)


  return (
    <>

      <div className={styles.contendInfodelivery}>

        <IconContext.Provider value={{ className: styles.reacticons }}>

          {
            promes <= 45 ?
              <div className={styles.contePromise}>
                <p><FcAlarmClock /></p>
                <p>{promes}</p>
              </div>
              :
              promes >= 80 ?
                <div className={styles.contePromise4}>
                  <p><FcAlarmClock /></p>
                  <p>{promes}</p>
                </div>
                :
                <div className={styles.contePromise3}>
                  <p><FcAlarmClock /></p>
                  <p>{promes}</p>
                </div>
          }
          <div className={styles.contePromise}>
            <p><FcShop /></p>
            <p>00</p>
          </div>
        </IconContext.Provider>
      </div>

    </>
  )
}
