import styled from 'styled-components'

export const SavedVideoContainer = styled.div`
  margin-right: 12px;
`

export const SavedVideoImage = styled.img`
  width: 400px;
`

export const SavedVideoItemLi = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const VideoContainerHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  font-family: 'Roboto';
  padding: 8px;
`

export const VideoTextPara = styled.p`
  margin-right: 6px;
  font-size: 14px;
  font-family: 'Roboto';
  margin: 4px;
  line-height: 1.5;
  color: ${props => (props.isDark ? '#94a3b8' : '#1e293b')};
`
