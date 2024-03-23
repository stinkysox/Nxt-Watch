import styled from 'styled-components'

export const VideoDetailsBgContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  position: relative;
  min-height: 100vh;
  width: 100%;
`

export const VideoDetailsContainer = styled(VideoDetailsBgContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ResultsUlContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  width: 100%;
`

export const BannerBgContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDark ? '#000000' : '#f1f5f9')};
  padding: 10px;
`

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const RoundContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#212121' : '#cbd5e1')};
  margin: 5px;
`

export const BannerHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  font-family: 'Roboto';
  padding: 8px;
`
