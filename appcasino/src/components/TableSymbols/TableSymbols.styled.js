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
    border: 2px solid #fff;
    width: 10em;
    height: 10em;
    border-radius: 5px;
    background-color: #795548;
`

export const IconFruits = styled.img`
    width: 10em;
    height: 10em;
    margin-top: ${({id}) => id === 'N' ? '3em' : 'inherit'};
`

export const ButtonPlay = styled.button`
    border: none;
    background-color: #795548;
    width: 7em;
    height: 7em;
    font-size: 14px;
    margin-top: 1em;
    border-radius: 99px;
    color: #fff;
    margin-left: 1em;
    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`

export const ButtonCashOut = styled.button`
    border: none;
    background-color: #ff0000;
    width: 7em;
    height: 7em;
    font-size: 14px;
    margin-top: 1em;
    border-radius: 99px;
    color: #fff;
    margin-left: 1em;
    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`

export const TitleTable = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #795548;
    margin-bottom: 1em;
    margin-right: 9.5em;
`