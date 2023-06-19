import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Image = styled.img`
  background-size: cover;
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.maxwidth};
  @media screen and (max-width: 768px) {
    height: 130px;
    width: 130px;
    border-radius: 65px;
    margin-top: 30px;
  }
`
export const Image1 = styled.img`
  background-size: cover;
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: ${props => props.maxwidth};
`
export const LoginContainer1 = styled.div`
  flex-grow: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LoginCard = styled.form`
  height: 50%;
  width: 50%;
  min-height: 300px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Label = styled.label`
  font-size: 18px;
`
export const Input = styled.input`
  height: 10%;
  width: 90%;
  min-height: 30px;
  min-width: 200px;
  border-radius: 3px;
  margin-top: 10px;
`
