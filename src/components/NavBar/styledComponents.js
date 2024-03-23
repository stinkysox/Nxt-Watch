import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 28px 10px 28px;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 20px !important;
    background-color: gray;
  }
`

export const NavOptionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const NavImage = styled.img`
  height: 30px;
`

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 10px;
  cursor: pointer;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const LargeNav = styled.div`
  display: block;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  @media (max-width: 768px) {
    display: none;
  }
`

export const SmallNav = styled.div`
  display: none;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  @media (max-width: 768px) {
    display: block;
  }
`

export const LogoutBtn = styled.button`
  background: transparent;
  color: ${props => (props.isDark ? 'white' : '#3b82f6')};
  border: ${props => (props.isDark ? '1px solid gray' : '1px solid #3b82f6')};
  border-radius: 5px;
  cursor: pointer;
  padding: 4px 10px;
  font-size: 16px;
  font-weight: bold;
`

export const PopUpContainer = styled.div`
 padding: 10px;
 height: 20vh;
 width: 400px;
 display: flex;
 flex-direction : column;
 align-items:center;
 background-color: ${props => (props.isDark ? '#0f0f0f' : 'white')};
 border-radius: 6px;
`

export const CancelBtn = styled.button`
  padding: 6px 16px;
  margin: 6px;
  border-radius: 6px;
  border: 1px solid #94a3b8;
  background: transparent;
  color: #94a3b8;
  cursor:pointer;
`

export const ConfirmBtn = styled.button`
  padding: 6px 16px;
  margin: 6px;
  border-radius: 6px;
  border: none;
  background-color: #3b82f6;
  color: white;
  cursor:pointer;
`
export const LogoutText = styled.p`
  color: ${props => (props.isDark ? 'lightgray' : '#3b82f6')};
  font-family: "Roboto";
`
