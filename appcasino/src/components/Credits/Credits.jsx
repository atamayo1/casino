import React, { useEffect } from 'react'
import { TotalCredits } from './Credits.styled'

const Credits = ({
  symbolIdOne,
  symbolIdTwo,
  symbolIdThree,
  totalCredit,
  setTotalCredit,
  setLoadingFruits,
}) => {
  useEffect(() => {
    if (symbolIdOne === 'C' && symbolIdTwo === 'C' && symbolIdThree === 'C') {
      setTotalCredit(totalCredit + 10)
    } else if (
      symbolIdOne === 'L' &&
      symbolIdTwo === 'L' &&
      symbolIdThree === 'L'
    ) {
      setTotalCredit(totalCredit + 20)
    } else if (
      symbolIdOne === 'N' &&
      symbolIdTwo === 'N' &&
      symbolIdThree === 'N'
    ) {
      setTotalCredit(totalCredit + 30)
    } else if (
      symbolIdOne === 'S' &&
      symbolIdTwo === 'S' &&
      symbolIdThree === 'S'
    ) {
      setTotalCredit(totalCredit + 40)
    } else if (symbolIdOne && symbolIdTwo && symbolIdThree) {
      setTotalCredit(totalCredit - 1)
    }
  }, [symbolIdOne, symbolIdThree, symbolIdTwo])
  return (
    <>
      <TotalCredits>Total Credits: ${totalCredit}</TotalCredits>
    </>
  )
}

export default Credits
