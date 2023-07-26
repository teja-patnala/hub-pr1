import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding-bottom: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-size: cover;
  background-image: url('https://res.cloudinary.com/dxx7ni6cl/image/upload/v1686709286/218407-library-building-interior-library-interior-and-boo_dwjqpr.jpg');
  @media screen and (max-width: 768px) {
    background-image: url('https://res.cloudinary.com/dxx7ni6cl/image/upload/v1686709473/HD-wallpaper-darklxxkgram-5-black-dark-library-lxxkgram_j6azu4.jpg');
    background-size: cover;
  }
`
export const HomeMainHeading = styled.h1`
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  font-family: ${props => props.fontfamily};
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`
export const HomePara = styled.p`
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  font-family: ${props => props.fontfamily};
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`
