import styled from 'styled-components'

export const BookItemList = styled.li`
  height: 200px;
  width: 300px;
  display: flex;
  margin: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 90%;
    max-width: 300px;
    justify-content: center;
  }
`
export const BookPara = styled.p`
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  font-family: ${props => props.fontfamily};
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
