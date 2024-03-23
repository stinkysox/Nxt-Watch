import {Link} from 'react-router-dom'
import {
  ListItem,
  VideoItemImage,
  Thumbnail,
  VideoItemContent,
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
      return (
        <Link to={`/videos/${id}`}>
          <ListItem>
            <VideoItemImage>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            </VideoItemImage>
            <VideoItemContent>
              <ItemTextDetails>
                <VideoTitle isDark={isDarkTheme}>{title}</VideoTitle>
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
