import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import NavBar from '../NavBar'
import LeftSideBar from '../LeftSideBar'
import WatchAppContext from '../../context/WatchAppContext'
import AllVideoDetails from '../AllVideoDetails'

import {
  VideoDetailsBgContainer,
  VideoDetailsContainer,
  LoaderContainer,
  NoResultsImage,
  NoResultsContainer,
  RetryButton,
  NoResultPara,
  NoResultHeading,
  ResultsUlContainer,
  BannerBgContainer,
  BannerContainer,
  RoundContainer,
  BannerHeading,
} from './styledComponents'

class GamingRoute extends Component {
  state = {
    apiStatus: 'Loading',
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onRetryClicked = () => {
    console.log('retry clicked')
    this.setState({apiStatus: 'Loading'}, this.getVideoDetails)
  }

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(apiUrl, options)
      if (!response.ok) {
        this.setState({apiStatus: 'Failed'})
      }
      const data = await response.json()
      const {videos} = data
      console.log(videos)
      const updatedData = videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      console.log(updatedData)
      this.setState({apiStatus: 'Success', videoDetails: updatedData})
    } catch (error) {
      console.log(error)
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
        const {isDarkTheme} = value
        const {videoDetails} = this.state
        return (
          <ResultsUlContainer>
            <BannerBgContainer data-testid="banner" isDark={isDarkTheme}>
              <BannerContainer>
                <RoundContainer isDark={isDarkTheme}>
                  <SiYoutubegaming fontSize="26px" color="#ff0b37" />
                </RoundContainer>
                <BannerHeading isDark={isDarkTheme}>Gaming</BannerHeading>
              </BannerContainer>
            </BannerBgContainer>
            {videoDetails.map(eachItem => (
              <AllVideoDetails key={eachItem.id} details={eachItem} />
            ))}
          </ResultsUlContainer>
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
                data-testid="gaming"
                isDark={isDarkTheme}
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

export default GamingRoute
