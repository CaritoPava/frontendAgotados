import styles from './infoDeliveryPromise.module.css'
import { FcAlarmClock } from 'react-icons/fc'
import { IconContext } from 'react-icons'
import { FcShop } from 'react-icons/fc'

export const InfoDeliveryPromise = ({ infoPlaces, place }) => {


  const places = [
    "circunvalar",
    "treinta",
    "cerritos",
    "arboleda",
    "victoria",
    "mallPlaza",
    "unicentro",
    "armenia",
    "pereiraPlaza"
  ]



  // return (
  //   <>

  //     <div className={styles.contendInfodelivery}>

  //       <IconContext.Provider value={{ className: styles.reacticons }}>
  //         {
  //           promes <= 45 ?
  //             <div className={styles.contePromise}>
  //               {/* <p><FcAlarmClock /></p> */}
  //               <p>{infoPlaces[place] ? <p>{infoPlaces[place].time}</p> : "no hay datos"}</p>
  //               <p>min</p>
  //             </div>
  //             :
  //             promes >= 80 ?
  //               <div className={styles.contePromise4}>
  //                 {/* <p><FcAlarmClock /></p> */}
  //                 {infoPlaces[place] ? <p>{infoPlaces[place].time}</p> : "no hay datos"}
  //                 <p>min</p>
  //               </div>
  //               :
  //               <div className={styles.contePromise3}>
  //                 {/* <p><FcAlarmClock /></p> */}
  //                 {infoPlaces[place] ? <p>{infoPlaces[place].time}</p> : "no hay datos"}
  //                 <p>min</p>
  //               </div>
  //         }
  //         <div className={styles.contePromise}>
  //           {
  //             promes <= 45 ?
  //               <div className={styles.contePromise}>
  //                 {/* <p><FcAlarmClock /></p> */}
  //                 <p>{infoPlaces[place].products}</p>
  //                 <p>unid</p>
  //               </div>
  //               :
  //               promes >= 80 ?
  //                 <div className={styles.contePromise4}>
  //                   {/* <p><FcAlarmClock /></p> */}
  //                   <p>{infoPlaces[place].products}</p>
  //                   <p>unid</p>
  //                 </div>
  //                 :
  //                 <div className={styles.contePromise3}>
  //                   {/* <p><FcAlarmClock /></p> */}
  //                   <p>{infoPlaces[place].products}</p>
  //                   <p>unid</p>
  //                 </div>
  //           }
  //         </div>
  //       </IconContext.Provider>
  //     </div>

  //   </>
  // )
  return (
    <>
      <div className={styles.contendInfodelivery}>
        {/* {infoPlaces[place] ?
          <div className={styles.contePromise}>
            <p>{infoPlaces[place].products}</p>
            <p>unid</p>
          </div>
          : " 🙁 no hay datos"} */}
        {infoPlaces[place] ?
          <div className={styles.contePromise}>
            <p>{infoPlaces[place].time}</p>
            <p>min</p>
          </div>
          : " 🙁 no hay datos"
        }
      </div>
    </>
  )
}
