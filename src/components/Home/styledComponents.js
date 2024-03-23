import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  min-height: 100vh;
  display: flex;
`

export const HomeResultsContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  position: relative;
`

export const NavImage = styled.img`
  height: 30px;
`

export const BannerSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BannerContents = styled.div`
  padding: 10px;
`

export const GetItNowBtn = styled.button`
  border: 1px solid black;
  background: transparent;
  color: black;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 6px;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 10px;
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 50%;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 16px;
  margin-top: 6px;
`

export const SearchButton = styled.button`
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`

export const ResultsUlContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  width: 100%;
`

export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoResultsImage = styled.img`
  width: 30%;
`

export const NoResultsContainer = styled.div`
  text-align: center;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const NoResultPara = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#1e293b')};
`

export const NoResultHeading = styled.h1`
  color: ${props => (props.isDark ? '#94a3b8' : '#1e293b')};
`
