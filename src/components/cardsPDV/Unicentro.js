import React from 'react'
import { Card } from '../Card'

export const Unicentro = ({ place, infoPlaces, soldOut, suggest }) => {

  return (
    <div>
      <Card place={place} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />
    </div>
  )
}
