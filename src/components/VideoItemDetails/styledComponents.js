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

export const YoutubeVideoContainer = styled.div`
  width: 100%;
`

export const VideoContainerHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  font-family: 'Roboto';
  padding: 8px;
`

export const LikesAndDislikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`

export const ViewsDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
  padding: 6px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

export const VideoTextPara = styled.p`
  margin-right: 6px;
  font-size: 14px;
  font-family: 'Roboto';
  margin: 4px;
  line-height: 1.5;
  color: ${props => (props.isDark ? '#94a3b8' : '#1e293b')};
`

export const LikeBtn = styled.button`
  background: transparent;
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 2px;
  cursor: pointer;
`

export const LikeBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  cursor: pointer;
  padding: 6px;
`

export const LikeBtnText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#1e293b')};
`

export const HorizontalLine = styled.hr`
  height: 2px;
  background-color: black;
`

export const VideoStatsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`

export const ProfilePicture = styled.img`
  height: 40px;
  margin: 6px;
`

export const PofileDescriptionText = styled(VideoTextPara)`
  margin-top: 18px;
  color: ${props => (props.isDark ? '#94a3b8' : '#1e293b')};
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
