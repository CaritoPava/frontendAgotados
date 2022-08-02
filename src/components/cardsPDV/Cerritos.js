import React from 'react'
import { Card } from '../Card'

export const Cerritos = ({ place, infoPlaces, soldOut, suggest }) => {

  return (
    <div>
      <Card place={place} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />
    </div>
  )
}
