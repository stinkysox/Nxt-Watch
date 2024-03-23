import styled from 'styled-components'

export const ListItem = styled.li`
  width: 280px;
  margin: 16px;
`

export const VideoItemImage = styled.div`
  width: 100%;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoItemContent = styled.div`
  display: flex;
  align-items: center;
`

export const ItemProfileImage = styled.div`
  margin: 6px;
`

export const ProfilePicture = styled.img`
  height: 40px;
  margin: 6px;
`

export const ItemTextDetails = styled.div``

export const VideoTextPara = styled.p`
  margin-right: 6px;
  font-size: 14px;
  font-family: 'Roboto';
  margin: 4px;
  line-height: 1.5;
  color: #94a3b8;
`

export const VideoTitle = styled(VideoTextPara)`
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
`

export const ViewsDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
`
