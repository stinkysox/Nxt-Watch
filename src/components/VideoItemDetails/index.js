import React, {Component} from 'react'
import Cookies from 'js-cookie'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {HiOutlineSave} from 'react-icons/hi'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import WatchAppContext from '../../context/WatchAppContext'
import LeftSideBar from '../LeftSideBar'
import NavBar from '../NavBar'

import {
  VideoDetailsBgContainer,
  VideoDetailsContainer,
  LoaderContainer,
  YoutubeVideoContainer,
  VideoContainerHeading,
  LikesAndDislikesContainer,
  ViewsDateContainer,
  VideoTextPara,
  LikeBtn,
  LikeBtnContainer,
  LikeBtnText,
  HorizontalLine,
  VideoStatsContainer,
  ProfilePicture,
  PofileDescriptionText,
  NoResultsImage,
  NoResultsContainer,
  RetryButton,
  NoResultPara,
  NoResultHeading,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    apiStatus: 'Loading',
    videoDetails: {},
    isLikeBtn: false,
    isDislikeBtn: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onRetryClicked = () => {
    console.log('retry clicked')
    this.setState({apiStatus: 'Loading'}, this.getVideoDetails)
  }

  getVideoDetails = async () => {
    const {match} = this.props

    try {
      if (!match) {
        throw new Error('Match prop not found')
      }

      const {id} = match.params
      const jwtToken = Cookies.get('jwt_token')
      const apiUrl = `https://apis.ccbp.in/videos/${id}`
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(apiUrl, options)
      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      console.log(data)
      const videoDetails = data.video_details
      const updatedData = {
        id: videoDetails.id,
        channel: videoDetails.channel,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
        videoUrl: videoDetails.video_url,
      }

      this.setState({apiStatus: 'Success', videoDetails: updatedData})
    } catch (error) {
      console.error(error)
      this.setState({apiStatus: 'Failed'})
    }
  }

  renderBasedOnApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'Loading':
        return this.renderLoadingScreen()

      case 'Failed':
        return this.renderFailureScreen()

      case 'Success':
        return this.renderSuccessResults()

      default:
        return null
    }
  }

  renderSuccessResults = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {
          isDarkTheme,
          onAddVideo,
          isSaved,
          onSaved,
          onLiked,
          onDisliked,
          isLiked,
          isDisLiked,
        } = value
        const {videoDetails} = this.state

        const {
          id,
          publishedAt,
          thumbnailUrl,
          title,
          viewCount,
          videoUrl,
          description,
        } = videoDetails
        const {
          name,
          profile_image_url: profileImageUrl,
          subscriberCount,
        } = videoDetails.channel

        const onSaveBtnClicked = () => {
          console.log('saved')
          onSaved()
          onAddVideo({thumbnailUrl, title, name, viewCount, id})
        }

        const onLikedBtnClicked = () => {
          onLiked()
        }

        const onDislikeClicked = () => {
          onDisliked()
        }

        return (
          <YoutubeVideoContainer>
            <ReactPlayer url={videoUrl} controls width="100" />
            <VideoContainerHeading isDark={isDarkTheme}>
              {title}
            </VideoContainerHeading>
            <LikesAndDislikesContainer>
              <ViewsDateContainer>
                <VideoTextPara isDark={isDarkTheme}>{viewCount}</VideoTextPara>
                <VideoTextPara isDark={isDarkTheme}>
                  {publishedAt}
                </VideoTextPara>
              </ViewsDateContainer>
              <ViewsDateContainer>
                <LikeBtnContainer>
                  <LikeBtn onClick={onLikedBtnClicked}>
                    <AiFillLike
                      color={isLiked ? '#3b82f6' : 'gray'}
                      fontSize="25px"
                    />
                  </LikeBtn>
                  <LikeBtnText isDark={isDarkTheme}>Like</LikeBtnText>
                </LikeBtnContainer>

                <LikeBtnContainer>
                  <LikeBtn onClick={onDislikeClicked}>
                    <AiFillDislike
                      fontSize="25px"
                      color={isDisLiked ? '#3b82f6' : 'gray'}
                    />
                  </LikeBtn>
                  <LikeBtnText isDark={isDarkTheme}>Dislike</LikeBtnText>
                </LikeBtnContainer>
                <LikeBtnContainer>
                  <LikeBtn onClick={onSaveBtnClicked}>
                    <HiOutlineSave
                      fontSize="25px"
                      color={isSaved ? '#3b82f6' : 'gray'}
                    />
                  </LikeBtn>
                  <LikeBtnText isDark={isDarkTheme}>
                    {isSaved ? 'saved' : 'save'}
                  </LikeBtnText>
                </LikeBtnContainer>
              </ViewsDateContainer>
            </LikesAndDislikesContainer>
            <HorizontalLine />
            <VideoStatsContainer>
              <div>
                <ProfilePicture src={profileImageUrl} alt="channel logo" />
              </div>
              <div>
                <VideoTextPara isDark={isDarkTheme}>{name}</VideoTextPara>
                <VideoTextPara isDark={isDarkTheme}>
                  {subscriberCount} subscribers
                </VideoTextPara>
                <PofileDescriptionText isDark={isDarkTheme}>
                  {description}
                </PofileDescriptionText>
              </div>
            </VideoStatsContainer>
          </YoutubeVideoContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

  renderLoadingScreen = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="gray" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureScreen = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoResultsContainer>
            {isDarkTheme ? (
              <NoResultsImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="no videos"
              />
            ) : (
              <NoResultsImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="no videos"
              />
            )}
            <NoResultHeading isDark={isDarkTheme}>
              Oops! Something Went Wrong
            </NoResultHeading>
            <NoResultPara isDark={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </NoResultPara>
            <RetryButton type="button" onClick={this.onRetryClicked}>
              Retry
            </RetryButton>
          </NoResultsContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

  render() {
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <NavBar />
              <VideoDetailsBgContainer
                isDark={isDarkTheme}
                data-testid="videoItemDetails"
              >
                <LeftSideBar />
                <VideoDetailsContainer isDark={isDarkTheme}>
                  {this.renderBasedOnApiStatus()}
                </VideoDetailsContainer>
              </VideoDetailsBgContainer>
            </>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default VideoItemDetails
