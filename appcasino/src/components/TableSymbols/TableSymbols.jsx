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

const TableSymbols = ({
  titleOfTable,
  loadingFruits,
  symbols,
  handlePlayGames,
  totalCredit,
  handleCashOut,
  activeAnimationCashOut,
  activeDisableCashOut,
}) => {
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
        <ButtonPlay onClick={handlePlayGames} disabled={totalCredit === 0}>
          Play
        </ButtonPlay>
        <ButtonCashOut randomX={Math.floor(Math.random()*300)} randomY={Math.floor(Math.random()*300)} activeAnimationCashOut={activeAnimationCashOut} onClick={handleCashOut} disabled={totalCredit === 0 || activeDisableCashOut}>
          Cash Out
        </ButtonCashOut>
      </TableRow>
    </GeneralStyle>
  )
}

export default TableSymbols
