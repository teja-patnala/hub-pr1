import styled from 'styled-components'

export const BookshelvesMainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding-bottom: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-size: cover;
  background-color: black;
`
export const List = styled.li`
  list-style-type: none;
  margin: 7px;
`
export const FilterButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  font-size: 17px;
  font-weight: bold;
  color: white;
  @media screen and (max-width: 768px) {
    border: 3px solid violet;
    font-size: 14px;
    border-radius: 10px;
  }
`
export const UL = styled.ul`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
