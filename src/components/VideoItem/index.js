import {Link} from 'react-router-dom'
import {
  ListItem,
  VideoItemImage,
  Thumbnail,
  VideoItemContent,
  ItemProfileImage,
  ProfilePicture,
  ItemTextDetails,
  VideoTextPara,
  ViewsDateContainer,
  VideoTitle,
} from './styledComponents'
import WatchAppContext from '../../context/WatchAppContext'

const VideoItem = props => (
  <WatchAppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {details} = props
      const {id, publishedAt, thumbnailUrl, title, viewCount} = details
      const channelDetails = details.channel
      const {name, profile_image_url: profileImageUrl} = channelDetails
      return (
        <Link to={`/videos/${id}`}>
          <ListItem>
            <VideoItemImage>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            </VideoItemImage>
            <VideoItemContent>
              <ItemProfileImage>
                <ProfilePicture src={profileImageUrl} alt="channel logo" />
              </ItemProfileImage>
              <ItemTextDetails>
                <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>
                <VideoTextPara>{name}</VideoTextPara>
                <ViewsDateContainer>
                  <VideoTextPara>{viewCount}</VideoTextPara>
                  <VideoTextPara>{publishedAt}</VideoTextPara>
                </ViewsDateContainer>
              </ItemTextDetails>
            </VideoItemContent>
          </ListItem>
        </Link>
      )
    }}
  </WatchAppContext.Consumer>
)

export default VideoItem
