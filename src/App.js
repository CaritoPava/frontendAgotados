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
import { SoundButton } from './components/controls/SoundButton';
import { getSoldOut } from './helpers/getSoldOut';
import { getSuggest } from './helpers/getSuggest';
import { Loading } from './components/Loading';
import { SelectPDV } from './modal/SelectPDV';
import { BarInfoDelivery } from './BarInfoDelivery';

const socket = io('http://44.208.37.247:9000', {
  query: {
    alias: 'call center'
  }
})


const MySwal = withReactContent(Swal)

function App() {

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
    armenia: false
  })

  const [isPDVSelected, setIsPDVSelected] = useState(false)
  const [isBarActive, setIsBarActive] = useState(true)


  useEffect(() => {
    socket.on('connection', () => {
      setIsConnected(true)
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    const urlPlaces = 'http://44.208.37.247:8080/api/places'


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

  socket.on('stock_cc_places', (args) => {
    setInfoPlaces({
      ...infoPlaces,
      [Object.keys(args)]: args[Object.keys(args)]
    })
    console.log(args, "args")
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

    setAlert(args)
    if (soldOut.length > 0) {
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
        title: `¡SE HA ELIMINADO UN ITEM DE AGOTADOS!`,
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
        title: `¡SE HA ELIMINADO UN ITEM DE SUGERIDOS!`,
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

  const isCircunvalar = (soldOut.find(soldOut => soldOut.place === 'circunvalar') || suggest.find(suggest => suggest.place === 'circunvalar')) && isButtonSelected.circunvalar
  const isTreinta = (soldOut.find(soldOut => soldOut.place === 'treinta') || suggest.find(suggest => suggest.place === 'treinta')) && isButtonSelected.treinta
  const isCerritos = (soldOut.find(soldOut => soldOut.place === 'cerritos') || suggest.find(suggest => suggest.place === 'cerritos')) && isButtonSelected.cerritos
  const isArboleda = (soldOut.find(soldOut => soldOut.place === 'arboleda') || suggest.find(suggest => suggest.place === 'arboleda')) && isButtonSelected.arboleda
  const isVictoria = (soldOut.find(soldOut => soldOut.place === 'victoria') || suggest.find(suggest => suggest.place === 'victoria')) && isButtonSelected.victoria
  const isManizales = (soldOut.find(soldOut => soldOut.place === 'manizales') || suggest.find(suggest => suggest.place === 'manizales')) && isButtonSelected.manizales
  const isUnicentro = (soldOut.find(soldOut => soldOut.place === 'unicentro') || suggest.find(suggest => suggest.place === 'unicentro')) && isButtonSelected.unicentro
  console.log(infoPlaces)


  const handleViewPDV = (place) => {
    setViewPDV({
      ...viewPDV,
      [place]: !viewPDV[place]
    })
    setIsButtonSelected({
      ...viewPDV,
      [place]: !isButtonSelected[place]
    })
  }

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


  // onClick={() => setIsBarActive(!isBarActive)} style={{ display: !isBarActive ? "none" : "visibility" }}


  return (
    <div className='conteWindow'>
      <div >
        <BarInfoDelivery infoPlaces={infoPlaces} isButtonSelected={isButtonSelected} isPDVSelected={isPDVSelected} />
        <button > ◀︎ </button>
      </div>
      <div>
        <div className='conteSelectPDV'>
          {/* <img src={require('./assets/blanco.png')} alt='logo' className='logoSayo' /> */}
          <audio src='./assets/sound/alert.wav' autoPlay={true} loop={true} controls={false} volume={1} />
          {/* <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, circunvalar: !viewPDV.circunvalar })}>Circunvalar</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, treinta: !viewPDV.treinta })}>Av 30 de Agosto</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, cerritos: !viewPDV.cerritos })}>Cerritos</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, arboleda: !viewPDV.arboleda })}>Arboleda</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, victoria: !viewPDV.victoria })}>Victoria</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, manizales: !viewPDV.manizales })}>Manizales</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, unicentro: !viewPDV.unicentro })}>Unicentro</button> */}
          <SoundButton audioAlarm={audioAlarm} />
          <SelectPDV setViewPDV={setViewPDV} viewPDV={viewPDV} handleViewPDV={handleViewPDV} isButtonSelected={isButtonSelected} setIsButtonSelected={setIsButtonSelected} />
        </div>
        {
          (soldOut.length > 0 || suggest.length > 0) && isPDVSelected ?
            <div className='cardContend'>
              {isCircunvalar && <Circunvalar place={'circunvalar'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isTreinta && <AvTreintaAgosto place={'treinta'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isCerritos && <Cerritos place={'cerritos'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isArboleda && <Arboleda place={'arboleda'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isVictoria && <CiudadVictoria place={'victoria'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isManizales && <Manizales place={'manizales'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
              {isUnicentro && <Unicentro place={'unicentro'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
            </div> :
            <Loading />
        }
      </div>
    </div>
  );
}

export default App;
