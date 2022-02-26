import styled from 'styled-components'

export const GeneralStyle = styled.div`
    background-image: ${({ImageBackground}) => ImageBackground ? `url(${ImageBackground})`:'inherit'};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    width: 118vw;
    height: 100vh;
`
