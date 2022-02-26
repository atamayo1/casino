import styled from 'styled-components'

export const GeneralStyle = styled.div`
    width: 100%;
`

export const TableRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid #FFC107;
    width: 10em;
    height: 10em;
    border-radius: 5px;
    margin-right: 1em;
    background-color: #fff;
`

export const IconFruits = styled.img`
    width: 10em;
    height: 10em;
`

export const ButtonPlay = styled.button`
    border: none;
    background-color: #FFC107;
    width: 7em;
    height: 7em;
    font-size: 14px;
    margin-top: 1em;
    border-radius: 99px;
    color: #000;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.5);
        transform: translateY(-1px);
    }
`

export const ButtonCashOut = styled.button`
    border: none;
    background-color: darkgreen;
    width: 7em;
    height: 7em;
    font-size: 14px;
    margin-top: 1em;
    border-radius: 99px;
    color: #fff;
    margin-left: 1em;
    transform: translate();
    font-weight: bold;
    &:hover{
        cursor: pointer;
        box-shadow: 0px 4px 20px 0px rgba(256, 256, 256, 0.5);
        transform: translateY(-1px);
    }
    transform: ${({activeAnimationCashOut, randomX, randomY}) => activeAnimationCashOut ? `translate(${randomX}px, ${randomY}px)` : `inherit`};
`

export const TitleTable = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1em;
    color: #fff;
    height: 1em;
    width: 100vw;
    padding: 1em;
`