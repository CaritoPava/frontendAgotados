import { namesPDVS } from '../helpers/namesPDVS'
import styles from './card.module.css'

import { InfoDeliveryPromise } from './InfoDeliveryPromise'
import { InfoProducts } from './InfoProducts'




export const Card = ({ place, infoPlaces, soldOut, suggest }) => {
  const places = namesPDVS


  return (
    <>
      {
        places[place] === "CIRCUNVALAR"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV} >{places[place]}</h2>
              {/* <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} /> */}
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "AV 30 DE AGOSTO"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV2} >{places[place]}</h2>
              {/* <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} /> */}
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "PORTAL CERRITOS"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV3} >{places[place]}</h2>
              {/* <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} /> */}
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "ARBOLEDA"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV4} >{places[place]}</h2>
              {/* <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} /> */}
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "VICTORIA"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV5} >{places[place]}</h2>
              {/* <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} /> */}
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "MALL PLAZA"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV6} >{places[place]}</h2>
              {/* <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} /> */}
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "UNICENTRO"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV7} >{places[place]}</h2>
              {/* <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} /> */}
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "PEREIRA PLAZA"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV8} >{places[place]}</h2>
              {/* <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} /> */}
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "PRIVILEGIO MALL PLAZA"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV2} >{places[place]}</h2>
              {/* <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} /> */}
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "BODEGA"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV3} >{places[place]}</h2>
              {/* <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} /> */}
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }

    </>
  )
}


