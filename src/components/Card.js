import styles from './card.module.css'

import { InfoDeliveryPromise } from './InfoDeliveryPromise'
import { InfoProducts } from './InfoProducts'




export const Card = ({ place, infoPlaces, soldOut, suggest }) => {
  const places = {
    circunvalar: "CIRCUNVALAR",
    treinta: "AV 30 DE AGOSTO",
    cerritos: "P DE CERRITOS",
    arboleda: "PARQUE ARBOLEDA",
    victoria: "CIUDAD VICTORIA",
    manizales: "MANIZALES",
    unicentro: "UNICENTRO",
    armenia: "ARMENIA"
  }

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
              <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} />
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
              <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} />
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "P DE CERRITOS"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV3} >{places[place]}</h2>
              <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} />
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "PARQUE ARBOLEDA"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV4} >{places[place]}</h2>
              <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} />
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "CIUDAD VICTORIA"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV5} >{places[place]}</h2>
              <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} />
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }
      {
        places[place] === "MANIZALES"
          ?
          <div
            className={styles.contendCard1}
          >
            <div className={styles.contendInfoPDV}>
              <h2 className={styles.namePDV6} >{places[place]}</h2>
              <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} />
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
              <InfoDeliveryPromise place={place} infoPlaces={infoPlaces} />
            </div>
            <InfoProducts place={place} soldOut={soldOut} suggest={suggest} />
          </div>
          :
          null
      }

    </>
  )
}


