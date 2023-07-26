import styled from 'styled-components'

export const Image2 = styled.img`
  background-size: cover;
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.maxwidth};
  @media screen and (max-width: 768px) {
    height: 25px;
    width: 100px;
  }
`
