import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import Cookies from 'js-cookie'
import NavBar from '../NavBar'
import LeftSideBar from '../LeftSideBar'
import AllVideoDetails from '../AllVideoDetails'
import WatchAppContext from '../../context/WatchAppContext'
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

class Trending extends Component {
  state = {
    apiStatus: 'Loading',
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onRetryClicked = () => {
    this.setState({apiStatus: 'Loading'}, this.getVideoDetails)
  }

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
      const updatedData = videos.map(eachItem => ({
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

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
                  <FaFire fontSize="26px" color="#ff0b37" />
                </RoundContainer>
                <BannerHeading isDark={isDarkTheme}>Trending</BannerHeading>
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
            <NoResultsImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="no videos"
            />
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
                data-testid="trending"
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

export default Trending
