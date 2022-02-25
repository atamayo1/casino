import React, { useEffect, useState } from 'react'
import TableSymbols from '../../components/TableSymbols'
import listOfFruits from '../../mocks/fruits.json'
import CerezaIcon from '../../assets/svg/cereza.svg'
import LimonIcon from '../../assets/svg/limon.svg'
import NaranjaIcon from '../../assets/svg/naranja.svg'
import SandiaIcon from '../../assets/svg/sandia.svg'
import Credits from '../../components/Credits/Credits'
import { GeneralStyle } from './LayoutHome.styled'

const LayoutHome = () => {
  const [titleOfTable] = useState('TRAGA MONEDAS')
  const [numberRandomOne, setNumerRandomOne] = useState(null)
  const [numberRandomTwo, setNumerRandomTwo] = useState(null)
  const [numberRandomThree, setNumerRandomThree] = useState(null)
  const [fruitSelectedOne, setFruitSelectedOne] = useState()
  const [fruitSelectedTwo, setFruitSelectedTwo] = useState()
  const [fruitSelectedThree, setFruitSelectedThree] = useState()
  const [symbols, setSymbols] = useState([])
  const [loadingFruits, setLoadingFruits] = useState(false)
  const [totalCredit, setTotalCredit] = useState(11)
  const [symbolIdOne, setSymbolIdOne] = useState()
  const [symbolIdTwo, setSymbolIdTwo] = useState()
  const [symbolIdThree, setSymbolIdThree] = useState()
  const [myCash, setMyCash] = useState()
  const [activeAnimationCashOut, setActiveAnimationCashOut] = useState(false)
  const [activeDisableCashOut, setActiveDisableCashOut] = useState(false)

  useEffect(() => {
    if (numberRandomOne !== null && numberRandomTwo !== null && numberRandomThree !== null) {
      setTimeout(() => {
        switch (listOfFruits.fruits[numberRandomOne]?.id) {
          case 'C':
            setFruitSelectedOne(CerezaIcon)
            break
          case 'L':
            setFruitSelectedOne(LimonIcon)
            break
          case 'N':
            setFruitSelectedOne(NaranjaIcon)
            break
          case 'S':
            setFruitSelectedOne(SandiaIcon)
            break
          default:
            break
        }
      }, 1000)
      setTimeout(() => {
        switch (listOfFruits.fruits[numberRandomTwo]?.id) {
          case 'C':
            setFruitSelectedTwo(CerezaIcon)
            break
          case 'L':
            setFruitSelectedTwo(LimonIcon)
            break
          case 'N':
            setFruitSelectedTwo(NaranjaIcon)
            break
          case 'S':
            setFruitSelectedTwo(SandiaIcon)
            break
          default:
            break
        }
      }, 2000)
      setTimeout(() => {
        switch (listOfFruits.fruits[numberRandomThree]?.id) {
          case 'C':
            setFruitSelectedThree(CerezaIcon)
            break
          case 'L':
            setFruitSelectedThree(LimonIcon)
            break
          case 'N':
            setFruitSelectedThree(NaranjaIcon)
            break
          case 'S':
            setFruitSelectedThree(SandiaIcon)
            break
          default:
            break
        }
      }, 3000)
    }
  }, [numberRandomOne, numberRandomThree, numberRandomTwo])

  useEffect(() => {
    if (fruitSelectedOne && fruitSelectedTwo && fruitSelectedThree) {
      setSymbolIdOne(listOfFruits.fruits[numberRandomOne]?.id)
      setSymbolIdTwo(listOfFruits.fruits[numberRandomTwo]?.id)
      setSymbolIdThree(listOfFruits.fruits[numberRandomThree]?.id)
      setSymbols([
        {
          id: listOfFruits.fruits[numberRandomOne]?.id,
          name: listOfFruits.fruits[numberRandomOne]?.name,
          uri: fruitSelectedOne,
        },
        {
          id: listOfFruits.fruits[numberRandomTwo]?.id,
          name: listOfFruits.fruits[numberRandomTwo]?.name,
          uri: fruitSelectedTwo,
        },
        {
          id: listOfFruits.fruits[numberRandomThree]?.id,
          name: listOfFruits.fruits[numberRandomThree]?.name,
          uri: fruitSelectedThree,
        },
      ])
      setLoadingFruits(false)
    }
  }, [fruitSelectedOne, fruitSelectedTwo, fruitSelectedThree])

  useEffect(() => {
    if (totalCredit >= 40 && totalCredit <= 60) {
      let random_boolean = Math.random() < 0.3
      if (random_boolean) {
        handlePlayGames()
      }
    }
    if (totalCredit > 60) {
      let random_boolean = Math.random() < 0.6
      if (random_boolean) {
        handlePlayGames()
      }
    }
  }, [totalCredit])

  let handlePlayGames = () => {
    if (myCash) {
      setTotalCredit(myCash)
      setMyCash(0)
    }
    setLoadingFruits(true)
    setNumerRandomOne(Math.floor(Math.random() * 5))
    setNumerRandomTwo(Math.floor(Math.random() * 5))
    setNumerRandomThree(Math.floor(Math.random() * 5))
  }

  let handleCashOut = () => {
    let random_boolean_animation = Math.random() < 0.5
    let random_boolean_disable = Math.random() < 0.4

    setActiveAnimationCashOut(random_boolean_animation)
    setActiveDisableCashOut(random_boolean_disable)

    setMyCash(totalCredit)
    setTotalCredit(0)
  }

  return (
    <GeneralStyle>
      <TableSymbols
        titleOfTable={titleOfTable}
        loadingFruits={loadingFruits}
        symbols={symbols}
        handlePlayGames={handlePlayGames}
        totalCredit={totalCredit}
        handleCashOut={handleCashOut}
        activeAnimationCashOut={activeAnimationCashOut}
        activeDisableCashOut={activeDisableCashOut}
      />
      <Credits
        symbolIdOne={symbolIdOne}
        symbolIdTwo={symbolIdTwo}
        symbolIdThree={symbolIdThree}
        setTotalCredit={setTotalCredit}
        totalCredit={totalCredit}
        myCash={myCash}
      />
    </GeneralStyle>
  )
}

export default LayoutHome
