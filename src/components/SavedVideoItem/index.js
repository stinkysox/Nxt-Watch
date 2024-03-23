import {Link} from 'react-router-dom'
import WatchAppContext from '../../context/WatchAppContext'
import {
  SavedVideoContainer,
  SavedVideoImage,
  SavedVideoItemLi,
  VideoContainerHeading,
  VideoTextPara,
} from './styledComponents'

const SavedVideoItem = props => (
  <WatchAppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {details} = props
      const {id, name, thumbnailUrl, title, viewCount} = details

      return (
        <Link to={`/videos/${id}`}>
          <SavedVideoItemLi>
            <SavedVideoContainer>
              <SavedVideoImage src={thumbnailUrl} />
            </SavedVideoContainer>
            <div>
              <VideoContainerHeading isDark={isDarkTheme}>
                {title}
              </VideoContainerHeading>
              <VideoTextPara isDark={isDarkTheme}>{name}</VideoTextPara>
              <VideoTextPara isDark={isDarkTheme}>{viewCount}</VideoTextPara>
            </div>
          </SavedVideoItemLi>
        </Link>
      )
    }}
  </WatchAppContext.Consumer>
)

export default SavedVideoItem
