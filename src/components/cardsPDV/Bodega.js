import React, { useState } from 'react'
import { Card } from '../Card'

export const Bodega = ({ place, infoPlaces, soldOut, suggest }) => {
  console.log(place)
  return (
    <div>
      <Card place={place} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />
    </div>
  )
}
