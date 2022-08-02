import React, { useState } from 'react'
import { Card } from '../Card'

export const Arboleda = ({ place, infoPlaces, soldOut, suggest }) => {

  return (
    <div>
      <Card place={place} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />
    </div>
  )
}
