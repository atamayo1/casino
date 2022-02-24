import React, { useEffect, useState } from 'react'
import {
  ContentColumn,
  GeneralStyle,
  IconFruits,
  TableRow,
} from './TableSymbols.styled'

const TableSymbols = ({
  nameOne,
  nameTwo,
  nameThree,
  fruitSelectedOne,
  fruitSelectedTwo,
  fruitSelectedThree,
}) => {
  useEffect(() => {}, [])

  return (
    <GeneralStyle>
      <TableRow>
        <ContentColumn>
          <IconFruits src={fruitSelectedOne} alt={nameOne} />
        </ContentColumn>
        <ContentColumn>
          <IconFruits src={fruitSelectedTwo} alt={nameTwo} />
        </ContentColumn>
        <ContentColumn>
          <IconFruits src={fruitSelectedThree} alt={nameThree} />
        </ContentColumn>
      </TableRow>
    </GeneralStyle>
  )
}

export default TableSymbols
