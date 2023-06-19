import styled from 'styled-components'

export const SliderPara = styled.li`
  list-style-type: none;
  margin-top: 4px;
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  font-family: ${props => props.fontfamily};
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 10px;
    font-weight: normal;
  }
`
