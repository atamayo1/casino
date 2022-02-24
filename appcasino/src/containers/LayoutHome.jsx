import React, { useEffect, useState } from 'react'
import TableSymbols from '../components/TableSymbols'
import { ButtonPlay, GeneralStyle } from './LayoutHome.styled'
import listOfFruits from '../mocks/fruits.json'
import CerezaIcon from '../assets/svg/cereza.svg'
import LimonIcon from '../assets/svg/limon.svg'
import NaranjaIcon from '../assets/svg/naranja.svg'
import SandiaIcon from '../assets/svg/sandia.svg'

const LayoutHome = () => {
  const [numberRandomOne, setNumerRandomOne] = useState(null)
  const [numberRandomTwo, setNumerRandomTwo] = useState(null)
  const [numberRandomThree, setNumerRandomThree] = useState(null)
  const [fruitSelectedOne, setFruitSelectedOne] = useState()
  const [fruitSelectedTwo, setFruitSelectedTwo] = useState()
  const [fruitSelectedThree, setFruitSelectedThree] = useState()

  useEffect(() => {
    switch (listOfFruits.fruits[numberRandomOne]?.name) {
        case 'cereza':
          setFruitSelectedOne(CerezaIcon)
          break
        case 'limon':
          setFruitSelectedOne(LimonIcon)
          break
        case 'naranja':
          setFruitSelectedOne(NaranjaIcon)
          break
        case 'sandia':
          setFruitSelectedOne(SandiaIcon)
          break
        default:
          break
      }
  
      switch (listOfFruits.fruits[numberRandomTwo]?.name) {
        case 'cereza':
          setFruitSelectedTwo(CerezaIcon)
          break
        case 'limon':
          setFruitSelectedTwo(LimonIcon)
          break
        case 'naranja':
          setFruitSelectedTwo(NaranjaIcon)
          break
        case 'sandia':
          setFruitSelectedTwo(SandiaIcon)
          break
        default:
          break
      }
  
      switch (listOfFruits.fruits[numberRandomThree]?.name) {
        case 'cereza':
          setFruitSelectedThree(CerezaIcon)
          break
        case 'limon':
          setFruitSelectedThree(LimonIcon)
          break
        case 'naranja':
          setFruitSelectedThree(NaranjaIcon)
          break
        case 'sandia':
          setFruitSelectedThree(SandiaIcon)
          break
        default:
          break
      }
  }, [numberRandomOne, numberRandomThree, numberRandomTwo])

  let handlePlayGames = () => {
    setNumerRandomOne(Math.floor(Math.random() * 5))
    setNumerRandomTwo(Math.floor(Math.random() * 5))
    setNumerRandomThree(Math.floor(Math.random() * 5))
  }

  return (
    <GeneralStyle>
      <h1 style={{color: '#795548'}}>Casino</h1>
      <TableSymbols
        nameOne={listOfFruits.fruits[numberRandomOne]?.name}
        nameTwo={listOfFruits.fruits[numberRandomTwo]?.name}
        nameThree={listOfFruits.fruits[numberRandomThree]?.name}
        fruitSelectedOne={fruitSelectedOne}
        fruitSelectedTwo={fruitSelectedTwo}
        fruitSelectedThree={fruitSelectedThree}
      />
      <ButtonPlay onClick={handlePlayGames}>Jugar</ButtonPlay>
    </GeneralStyle>
  )
}

export default LayoutHome
