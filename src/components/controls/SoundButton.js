import React, { useState } from 'react'
import styles from './soundButton.module.css'
import { BsBell } from 'react-icons/bs'
import { BsBellSlash } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export const SoundButton = ({ audioAlarm }) => {
  const [activeSound, setActiveSound] = useState(true)
  return (
    <div className={styles.conteButtonBell}>
      <IconContext.Provider value={{ className: styles.reacticons }}>
        {activeSound ? <p onClick={() => {
          setActiveSound(!activeSound)
        }} ><BsBell /></p> : <p onClick={() => {
          setActiveSound(!activeSound)
        }}><BsBellSlash /></p>}
        {/* <button className={styles.soundButton} onClick={() => {
        setActiveSound(!activeSound)
      }}
      /> */}
        {(audioAlarm && activeSound) && <audio autoPlay={true} src={require('../../assets/sound/alert.mp3')} />}
      </IconContext.Provider>
    </div>
  )
}
