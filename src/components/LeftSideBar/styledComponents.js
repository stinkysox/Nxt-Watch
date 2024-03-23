import styled from 'styled-components'

export const LeftSideBgContainer = styled.div`
  width: 20%;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 786px) {
    display: none;
  }
`
export const CategoryOption = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  font-family: 'Roboto';
  background-color: ${props =>
    props.active ? (props.isDark ? 'gray' : '#d7dfe9') : 'transparent'};
  color: ${props => (props.active ? 'red' : 'gray')};

`

export const CategorySelectionContainer = styled.ul`
  padding: 0;
`

export const OptionName = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  font-size: 14px;
  font-family: 'Roboto';
  margin: 6px;
`

export const LeftBarFooterSection = styled.ul`
  text-align: center;
  padding: 8px;
`

export const SocialMediaLogosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialImage = styled.img`
  height: 28px;
  margin: 6px;
`

export const FooterHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  font-weight: bold;
`

export const FooterPara = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  font-weight: bold;
`
