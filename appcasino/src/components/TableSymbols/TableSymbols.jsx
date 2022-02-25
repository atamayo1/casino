import React, { useEffect, useState } from 'react'
import {
  ButtonCashOut,
  ButtonPlay,
  ContentColumn,
  GeneralStyle,
  IconFruits,
  TableRow,
  TitleTable,
} from './TableSymbols.styled'
import { ReactComponent as Spinner } from '../../assets/svg/spinner.svg'

const TableSymbols = ({ titleOfTable, loadingFruits, symbols, handlePlayGames, totalCredit }) => {

  return (
    <GeneralStyle>
      <TitleTable>{titleOfTable}</TitleTable>
      <TableRow>
        {symbols.length > 0 && !loadingFruits ? (
          symbols.map((element) => {
            return (
              <ContentColumn>
                <IconFruits
                  src={element.uri}
                  alt={element.name}
                  id={element.id}
                />
              </ContentColumn>
            )
          })
        ) : (
          <>
            {loadingFruits ? (
              <>
                <ContentColumn>
                  <Spinner style={{ width: '7em' }} />
                </ContentColumn>
                <ContentColumn>
                  <Spinner style={{ width: '7em' }} />
                </ContentColumn>
                <ContentColumn>
                  <Spinner style={{ width: '7em' }} />
                </ContentColumn>
              </>
            ) : (
              <>
                <ContentColumn></ContentColumn>
                <ContentColumn></ContentColumn>
                <ContentColumn></ContentColumn>
              </>
            )}
          </>
        )}
        <ButtonPlay onClick={handlePlayGames} disabled={totalCredit === 0}>Play</ButtonPlay>
        <ButtonCashOut onClick={handlePlayGames} disabled={totalCredit === 0}>Cash Out</ButtonCashOut>
      </TableRow>
    </GeneralStyle>
  )
}

export default TableSymbols
