import React from 'react'
import { Card } from '../Card'

export const PereiraPlaza = ({ place, infoPlaces, soldOut, suggest }) => {

  console.log(suggest, soldOut, infoPlaces, place, "pereiraPlaza")
  return (
    <div>
      <Card place={place} infoPlaces={infoPlaces} soldOut={soldOut} suggest={suggest} />
    </div>
  )
}
