import styles from './infoDeliveryPromise.module.css'
import { FaMotorcycle } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { FaHamburger } from 'react-icons/fa'

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
                <p><FaMotorcycle /></p>
                {/* <p>{promes}</p> */}
              </div>
              :
              promes >= 80 ?
                <div className={styles.contePromise4}>
                  <p><FaMotorcycle /></p>
                  {/* <p>{promes}</p> */}
                </div>
                :
                <div className={styles.contePromise3}>
                  <p><FaMotorcycle /></p>
                  {/* <p>{promes}</p> */}
                </div>
          }
          <div className={styles.contePromise}>
            <p><FaHamburger /></p>
            {/* <p>40</p> */}
          </div>
        </IconContext.Provider>
      </div>

    </>
  )
}
