import React from 'react'
import { Card } from '../Card'

export const Cerritos = ({ audioAlarm, place, infoPlaces, soldOut, suggest }) => {
  // console.log(audioAlarm)
  return (
    <div>
      {audioAlarm && <audio autoPlay={true} src={require('../../assets/sound/alert.mp3')} />}
      <Card place={place} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />
    </div>
  )
}
