import './App.css';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client'
import Swal from 'sweetalert2'
import axios from 'axios'

import { AvTreintaAgosto } from './components/cardsPDV/AvTreintaAgosto';
import { Circunvalar } from './components/cardsPDV/Circunvalar';
import { Cerritos } from './components/cardsPDV/Cerritos';
// import { CiudadVictoria } from './components/cardsPDV/CiudadVictoria';
// import { Unicentro } from './components/cardsPDV/Unicentro';
import { Manizales } from './components/cardsPDV/Manizales';
// import { Armenia } from './components/cardsPDV/Armenia';
// import { Arboleda } from './components/cardsPDV/Arboleda';

const socket = io('http://54.144.167.225:9000', {
  query: {
    alias: 'call center'
  }
})


function App() {

  const [isConnected, setIsConnected] = useState(socket.connected)
  const [infoPlaces, setInfoPlaces] = useState({})
  const [soldOut, setSoldout] = useState([])
  const [suggest, setSuggest] = useState([])

  useEffect(() => {
    socket.on('connection', () => {
      setIsConnected(true)
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    const urlPlaces = 'http://54.144.167.225:8080/api/places'
    const urlSoldOut = 'http://54.144.167.225:8080/api/soldout'
    const urlSuggest = 'http://54.144.167.225:8080/api/suggest'

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

  // useEffect(() => {
  //   let timerInterval
  //   Swal.fire({
  //     title: 'ACTUALIZACION',
  //     html: 'NUEVO PRODUCTO ',
  //     timer: 5000,
  //     timerProgressBar: true,
  //     didOpen: () => {
  //       Swal.showLoading()
  //       const b = Swal.getHtmlContainer().querySelector('b')
  //       timerInterval = setInterval(() => {
  //         b.textContent = Swal.getTimerLeft()
  //       }, 100)
  //     },
  //     willClose: () => {
  //       clearInterval(timerInterval)
  //     }
  //   }).then((result) => {
  //     /* Read more about handling dismissals below */
  //     if (result.dismiss === Swal.DismissReason.timer) {
  //       console.log('I was closed by the timer')
  //     }
  //   })
  //   return () => {

  //   }
  // }, [soldOut, suggest])


  socket.on('stock_cc_places', (args) => {
    console.log(args, 'socket')
    console.log(infoPlaces, 'api en socket')
    setInfoPlaces({
      ...infoPlaces,
      [Object.keys(args)]: args[Object.keys(args)]
    })
    console.log(infoPlaces, 'api + socket')
  })

  socket.on('stock_cc_soldout', (args) => {
    setSoldout([
      ...soldOut,
      args
    ])
  })

  socket.on('stock_cc_suggest', (args) => {
    setSuggest([
      ...suggest,
      args
    ])
  })



  return (
    <div >
      <div className='cardContend'>
        <AvTreintaAgosto place={'treinta'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />
        <Circunvalar place={'circunvalar'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />
        <Cerritos place={'cerritos'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />
        {/* <CiudadVictoria place={'ciudadvictoria'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} /> */}
        {/* <Unicentro place={'unicentro'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} /> */}
        <Manizales place={'manizales'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />
        {/* <Armenia place={'armenia'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} /> */}
        {/* <Arboleda place={'arboleda'} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} /> */}
      </div>
    </div>
  );
}

export default App;
