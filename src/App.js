import './App.css';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import styled from "styled-components";
import axios from 'axios'
import ReactAudioPlayer from 'react-audio-player';

import { AvTreintaAgosto } from './components/cardsPDV/AvTreintaAgosto';
import { Circunvalar } from './components/cardsPDV/Circunvalar';
import { Cerritos } from './components/cardsPDV/Cerritos';
import { CiudadVictoria } from './components/cardsPDV/CiudadVictoria';
import { Unicentro } from './components/cardsPDV/Unicentro';
import { Manizales } from './components/cardsPDV/Manizales';
import { Arboleda } from './components/cardsPDV/Arboleda';
import { SoundButton } from './components/controls/SoundButton';

const socket = io('http://3.93.184.201:9000', {
  query: {
    alias: 'call center'
  }
})

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

const MySwal = withReactContent(Swal)

function App() {

  const [isConnected, setIsConnected] = useState(socket.connected)
  const [infoPlaces, setInfoPlaces] = useState({})
  const [soldOut, setSoldout] = useState([])
  const [suggest, setSuggest] = useState([])
  const [alert, setAlert] = useState("")
  const [color, setColor] = useState(false)
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

  useEffect(() => {
    socket.on('connection', () => {
      setIsConnected(true)
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    const urlPlaces = 'http://3.93.184.201:8080/api/places'
    const urlSoldOut = 'http://3.93.184.201:8080/api/soldout'
    const urlSuggest = 'http://3.93.184.201:8080/api/suggest'

    try {
      axios.get(urlPlaces)
        .then(({ data }) => {
          data.message.map(infoPlace => setInfoPlaces({ [Object.keys(infoPlace)]: infoPlace[Object.keys(infoPlace)] }))
        })
        .catch(err => console.log(err))

      axios.get(urlSoldOut)
        .then(({ data }) => {
          setSoldout(data.message)
        }
        )
        .catch(err => console.log(err))

      axios.get(urlSuggest)
        .then(({ data }) => setSuggest(data.message))
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
  })

  socket.on('stock_cc_soldout', (args) => {
    setSoldout([
      ...soldOut,
      args
    ])

    setAudioAlarm(true)
    setTimeout(() => {
      setAudioAlarm(false)
    }, 1000)
    // setAudioAlarm(false)

    setAlert(args)
    if (soldOut.length > 0) {
      MySwal.fire({
        title: `¡NUEVO AGOTADO! ${args.place.toUpperCase()}`,
        text: `${args.productName} está agotado en ${args.place}`,
        icon: 'error',
        iconColor: 'white',
        timer: 30000,
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
    setAlert(args)
    if (soldOut.length > 0) {
      MySwal.fire({
        title: `¡NUEVO SUGERIDO! EN ${args.place.toUpperCase()}`,
        text: `${args.productName} es sugerido en ${args.place}`,
        icon: 'success',
        iconColor: 'white',
        timer: 30000,
        showConfirmButton: false,
        background: '#0E9528',
        color: 'white',
        allowOutsideClick: true,
      })
    }
  })


  socket.on('stock_cc_soldout_remove', (args) => {
    const urlSoldOut = 'http://3.93.184.201:8080/api/soldout'
    axios.get(urlSoldOut)
      .then(({ data }) => {
        setSoldout(data.message)
      }
      )
      .catch(err => console.log(err))
  })

  socket.on('stock_cc_suggest_remove', (args) => {
    const urlSuggest = 'http://3.93.184.201:8080/api/suggest'
    axios.get(urlSuggest)
      .then(({ data }) => {
        setSuggest(data.message)
      }
      )
      .catch(err => console.log(err))
  })

  return (
    <div >
      <div className='conteSelectPDV'>
        <SoundButton audioAlarm={audioAlarm} />
        <audio src='./assets/sound/alert.ogg' autoPlay={true} loop={true} controls={false} volume={1} />
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, circunvalar: !viewPDV.circunvalar })}>Circunvalar</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, treinta: !viewPDV.treinta })}>Av 30 de Agosto</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, cerritos: !viewPDV.cerritos })}>Cerritos</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, arboleda: !viewPDV.arboleda })}>Arboleda</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, victoria: !viewPDV.victoria })}>Victoria</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, manizales: !viewPDV.manizales })}>Manizales</button>
        <button className='btnSelectPDV' onClick={() => setViewPDV({ ...viewPDV, unicentro: !viewPDV.unicentro })}>Unicentro</button>
      </div>
      <div className='cardContend'>
        {viewPDV.circunvalar && <Circunvalar place={'circunvalar'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
        {viewPDV.treinta && <AvTreintaAgosto place={'treinta'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
        {viewPDV.cerritos && <Cerritos place={'cerritos'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
        {viewPDV.arboleda && <Arboleda place={'arboleda'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
        {viewPDV.victoria && <CiudadVictoria place={'victoria'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
        {viewPDV.manizales && <Manizales place={'manizales'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
        {viewPDV.unicentro && <Unicentro place={'unicentro'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />}
      </div>
    </div>
  );
}

export default App;
