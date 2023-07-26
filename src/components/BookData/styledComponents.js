import styled from 'styled-components'

export const BookPara1 = styled.p`
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  font-family: ${props => props.fontfamily};
  color: ${props => props.color};
  margin-left: 7%;
  margin-right: 7%;
  @media screen and (max-width: 768px) {
    font-size: ${props => props.fontsize1};
  }
`
