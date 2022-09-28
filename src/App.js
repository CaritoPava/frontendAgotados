import './App.css';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

import { AvTreintaAgosto } from './components/cardsPDV/AvTreintaAgosto';
import { Circunvalar } from './components/cardsPDV/Circunvalar';
import { Cerritos } from './components/cardsPDV/Cerritos';
import { CiudadVictoria } from './components/cardsPDV/CiudadVictoria';
import { Unicentro } from './components/cardsPDV/Unicentro';
import { Manizales } from './components/cardsPDV/Manizales';
import { Arboleda } from './components/cardsPDV/Arboleda';
import { PereiraPlaza } from './components/cardsPDV/PereiraPlaza';
import { Armenia } from './components/cardsPDV/Armenia';
import { SoundButton } from './components/controls/SoundButton';
import { getSoldOut } from './helpers/getSoldOut';
import { getSuggest } from './helpers/getSuggest';
import { Loading } from './components/Loading';
import { SelectPDV } from './modal/SelectPDV';
import { BarInfoDelivery } from './BarInfoDelivery';

const socket = io(process.env.REACT_APP_URL_RT || 'localhost:9000', {
  query: {
    alias: 'call center'
  }
})

const MySwal = withReactContent(Swal)

function App() {
  console.log('version 1.0.0')
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [infoPlaces, setInfoPlaces] = useState({})
  const [soldOut, setSoldout] = useState([])
  const [suggest, setSuggest] = useState([])
  const [alert, setAlert] = useState("")
  const [reloadAPI, setReloadAPI] = useState(false)
  const [viewPDV, setViewPDV] = useState({
    circunvalar: false,
    treinta: false,
    cerritos: false,
    arboleda: false,
    victoria: false,
    manizales: false,
    unicentro: false,
    pereiraPlaza: false,
    BODEGA: false,
    armenia: false
  })
  const [audioAlarm, setAudioAlarm] = useState(false)
  const [isButtonSelected, setIsButtonSelected] = useState({
    circunvalar: false,
    treinta: false,
    cerritos: false,
    arboleda: false,
    victoria: false,
    manizales: false,
    unicentro: false,
    pereiraPlaza: false,
    armenia: false,
    BODEGA: false,
    allPDVs: false,
  })
  const [isSelectAllPDV, setIsSelectAllPDV] = useState(false)
  const [isPDVSelected, setIsPDVSelected] = useState(false)
  const [isBarActive, setIsBarActive] = useState(true)
  let isCircunvalar = false
  let isTreinta = false
  let isCerritos = false
  let isArboleda = false
  let isVictoria = false
  let isManizales = false
  let isUnicentro = false
  let isPereiraPlaza = false
  let isArmenia = false
  let isBodega = false

  if (!isSelectAllPDV) {

    isCircunvalar = ((soldOut.find(soldOut => soldOut.place === 'circunvalar') || suggest.find(suggest => suggest.place === 'circunvalar')) && (isButtonSelected.circunvalar))
    isTreinta = ((soldOut.find(soldOut => soldOut.place === 'treinta') || suggest.find(suggest => suggest.place === 'treinta')) && (isButtonSelected.treinta))
    isCerritos = (soldOut.find(soldOut => soldOut.place === 'cerritos') || suggest.find(suggest => suggest.place === 'cerritos')) && (isButtonSelected.cerritos)
    isArboleda = (soldOut.find(soldOut => soldOut.place === 'arboleda') || suggest.find(suggest => suggest.place === 'arboleda')) && (isButtonSelected.arboleda)
    isVictoria = (soldOut.find(soldOut => soldOut.place === 'victoria') || suggest.find(suggest => suggest.place === 'victoria')) && (isButtonSelected.victoria)
    isManizales = (soldOut.find(soldOut => soldOut.place === 'manizales') || suggest.find(suggest => suggest.place === 'manizales')) && (isButtonSelected.manizales)
    isUnicentro = (soldOut.find(soldOut => soldOut.place === 'unicentro') || suggest.find(suggest => suggest.place === 'unicentro')) && (isButtonSelected.unicentro)
    isPereiraPlaza = (soldOut.find(soldOut => soldOut.place === 'pereiraPlaza') || suggest.find(suggest => suggest.place === 'pereiraPlaza')) && (isButtonSelected.pereiraPlaza)
    isArmenia = (soldOut.find(soldOut => soldOut.place === 'armenia') || suggest.find(suggest => suggest.place === 'armenia')) && (isButtonSelected.armenia)
    isBodega = (soldOut.find(soldOut => soldOut.place === 'BODEGA La 18') || suggest.find(suggest => suggest.place === 'BODEGA la 18')) && (isButtonSelected.bodega)

  } else {
    isCircunvalar = true
    isTreinta = true
    isCerritos = true
    isArboleda = true
    isVictoria = true
    isManizales = true
    isUnicentro = true
    isPereiraPlaza = true
    isArmenia = true
    isBodega = true
  }

  useEffect(() => {
    socket.on('connection', () => {
      setIsConnected(true)
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    const urlPlaces = process.env.REACT_APP_URL_API_PLACES || 'localhost:8080'


    try {
      axios.get(urlPlaces)
        .then(({ data }) => {
          data.message.map(infoPlace => setInfoPlaces({ [Object.keys(infoPlace)]: infoPlace[Object.keys(infoPlace)] }))
        })
        .catch(err => console.log(err))

      getSoldOut()
        .then(response => {
          setSoldout(response)
        }
        )
        .catch(err => console.log(err))

      getSuggest()
        .then(response => {
          setSuggest(response)
        }
        )
        .catch(err => console.log(err))

    } catch (error) {
      console.log(error)
    }


    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  }, [])


  socket.on('stock_cc_restarting_sockets', (args) => {
    console.log(args, "se reinicio el socket")
    window.location.reload()
  })


  socket.on('stock_cc_places', (args) => {
    setInfoPlaces({
      ...infoPlaces,
      [Object.keys(args)]: args[Object.keys(args)]
    })

    setAudioAlarm(true)
    setTimeout(() => {
      setAudioAlarm(false)
    }, 10000)
    // setAudioAlarm(false)
    setAlert(args)

    MySwal.fire({
      title: `Ha cambiado la promesa de entrega a  ${args[Object.keys(args)].time} minutos`,
      // title: `Ha cambiado el promesa de entrega a  ${args[Object.keys(args)].time} minutos,
      // ${args[Object.keys(args)].products} unidades en proceso en ${Object.keys(args)}`,
      icon: 'info',
      iconColor: 'white',
      timer: 20000,
      showConfirmButton: false,
      background: 'blue',
      color: 'white',
      allowOutsideClick: true,
    })

  })

  socket.on('stock_cc_soldout', (args) => {
    setSoldout([
      ...soldOut,
      args
    ])

    setAudioAlarm(true)
    setTimeout(() => {
      setAudioAlarm(false)
    }, 10000)
    // setAudioAlarm(false)

    console.log(isButtonSelected[args.place], "args", args.place)
    setAlert(args)
    console.log("entro")
    if (isButtonSelected[args.place]) {
      if (soldOut.length > 0 && args.productName !== "SIN AGOTADOS") {
        MySwal.fire({
          title: `¡NUEVO AGOTADO! ${args.place.toUpperCase()}`,
          text: `${args.productName} está agotado en ${args.place}`,
          icon: 'error',
          iconColor: 'white',
          timer: 20000,
          showConfirmButton: false,
          background: '#BA080D',
          color: 'white',
          allowOutsideClick: true,
        })
      } else {
        MySwal.fire({
          title: `¡NO HAY AGOTADOS EN ${args.place.toUpperCase()}!`,
          text: `Puedes vender sin restricciones`,
          icon: 'success',
          iconColor: 'white',
          timer: 20000,
          showConfirmButton: false,
          background: 'orange',
          color: 'white',
          allowOutsideClick: true,
        })
      }
    } else {
      console.log("no se muestra")
    }
  })

  socket.on('stock_cc_suggest', (args) => {
    setSuggest([
      ...suggest,
      args
    ])
    setAudioAlarm(true)
    setTimeout(() => {
      setAudioAlarm(false)
    }, 5000)
    setAlert(args)
    if (isButtonSelected[args.place]) {
      if (soldOut.length > 0) {
        MySwal.fire({
          title: `¡NUEVO SUGERIDO! EN ${args.place.toUpperCase()}`,
          text: `${args.productName} es sugerido en ${args.place}`,
          icon: 'success',
          iconColor: 'white',
          timer: 20000,
          showConfirmButton: false,
          background: '#0E9528',
          color: 'white',
          allowOutsideClick: true,
        })
      }
    } else {
      console.log("no se muestra")
    }
  })


  useEffect(() => {

    getSoldOut()
      .then(response => {
        setSoldout(response)
      }
      )
      .catch(err => console.log(err))

    getSuggest()
      .then(response => {
        setSuggest(response)
      }
      )
      .catch(err => console.log(err))

  }, [reloadAPI])



  socket.on('stock_cc_soldout_remove', (args) => {
    setReloadAPI(!reloadAPI)
    setAudioAlarm(true)

    setTimeout(() => {
      setAudioAlarm(false)
    }, 10000)
    // setAudioAlarm(false)

    setAlert(args)
    if (soldOut.length > 0) {
      MySwal.fire({
        title: `¡SE HA ELIMINADO DE AGOTADOS ${args.product.toUpperCase()} EN ${args.place.toUpperCase()}!`,
        icon: 'success',
        iconColor: 'white',
        timer: 20000,
        showConfirmButton: false,
        background: 'var(--amarillo)',
        color: 'white',
        allowOutsideClick: true,
      })
    }
  })

  socket.on('stock_cc_suggest_remove', (args) => {
    setReloadAPI(!reloadAPI)

    setTimeout(() => {
      setAudioAlarm(false)
    }, 10000)
    // setAudioAlarm(false)

    setAlert(args)
    if (soldOut.length > 0) {
      MySwal.fire({
        title: `¡SE HA ELIMINADO ${args.product.toUpperCase()} EN ${args.place.toUpperCase()} EN SUGERIDOS!`,
        icon: 'success',
        iconColor: 'white',
        timer: 20000,
        showConfirmButton: false,
        background: 'var(--amarillo)',
        color: 'white',
        allowOutsideClick: true,
      })
    }
  })






  const handleViewPDV = (place) => {


    setViewPDV({
      ...viewPDV,
      [place]: !viewPDV[place]
    })
    setIsButtonSelected({
      ...isButtonSelected,
      [place]: !isButtonSelected[place]
    })

  }

  const handleViewPDVAll = () => {
    setIsSelectAllPDV(!isSelectAllPDV)
  }





  // se usa para mostrar en pantalla las sucursales seleccionadas
  useEffect(() => {
    let isAnyButtonSelected = 0
    for (const place in isButtonSelected) {
      if (isButtonSelected[place]) {
        isAnyButtonSelected += 1
      }
    }
    if (isAnyButtonSelected === 0) {
      setIsPDVSelected(false)
    }
    else {
      setIsPDVSelected(true)

    }
  }, [isButtonSelected])

  return (
    <div className='conteWindow'>
      <div >
        <BarInfoDelivery infoPlaces={infoPlaces} isButtonSelected={isButtonSelected} isPDVSelected={isPDVSelected} isSelectAllPDV={isSelectAllPDV} />
      </div>
      <div>
        <div className='conteSelectPDV'>
          <audio src='./assets/sound/alert.wav' autoPlay={true} loop={true} controls={false} volume={1} />
          <SoundButton audioAlarm={audioAlarm} />
          <SelectPDV setViewPDV={setViewPDV} viewPDV={viewPDV} handleViewPDV={handleViewPDV} handleViewPDVAll={handleViewPDVAll} isButtonSelected={isButtonSelected} setIsButtonSelected={setIsButtonSelected} isSelectAllPDV={isSelectAllPDV} />
        </div>

        {
          ((soldOut.length > 0 || suggest.length > 0) && isPDVSelected) || ((soldOut.length > 0 || suggest.length > 0) && isSelectAllPDV) ?
            <div className={!isSelectAllPDV ? 'cardContend' : 'cardContendAll'}>
              {isCircunvalar && <Circunvalar place={'circunvalar'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isTreinta && <AvTreintaAgosto place={'treinta'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isCerritos && <Cerritos place={'cerritos'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isArboleda && <Arboleda place={'arboleda'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isVictoria && <CiudadVictoria place={'victoria'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isManizales && <Manizales place={'manizales'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isUnicentro && <Unicentro place={'unicentro'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isPereiraPlaza && <PereiraPlaza place={'pereiraPlaza'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isArmenia && <Armenia place={'armenia'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isBodega && <Armenia place={'BODEGA'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
            </div> :
            <Loading />
        }
      </div>
    </div>
  );

}


export default App;
