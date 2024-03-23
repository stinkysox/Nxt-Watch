import React, {Component} from 'react'
import {IoIosClose, IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import LeftSideBar from '../LeftSideBar'
import VideoItem from '../VideoItem'
import WatchAppContext from '../../context/WatchAppContext'

import {
  HomeMainContainer,
  HomeResultsContainer,
  BannerSection,
  NavImage,
  BannerContents,
  GetItNowBtn,
  CloseButton,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  ResultsUlContainer,
  LoaderContainer,
  NoResultsImage,
  NoResultsContainer,
  RetryButton,
  NoResultHeading,
  NoResultPara,
} from './styledComponents'

class Home extends Component {
  state = {
    showBanner: true,
    userSearchInput: '',
    apiStatus: 'Loading',
    videoDetails: [],
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onCloseClicked = () => {
    this.setState({showBanner: false})
  }

  onInputChange = event => {
    this.setState({userSearchInput: event.target.value})
  }

  onSearchClick = () => {
    this.getVideoDetails()
  }

  onRetryCliked = () => {
    this.setState({apiStatus: 'Loading'}, this.getVideoDetails)
  }

  getVideoDetails = async () => {
    const {userSearchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${userSearchInput}`
    const jwtToken = Cookies.get('jwt_token')
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
      if (videos.length < 1) {
        this.setState({apiStatus: 'Empty'})
      } else {
        const updatedData = videos.map(eachItem => ({
          id: eachItem.id,
          publishedAt: eachItem.published_at,
          thumbnailUrl: eachItem.thumbnail_url,
          title: eachItem.title,
          viewCount: eachItem.view_count,
          channel: eachItem.channel,
        }))
        this.setState({videoDetails: updatedData, apiStatus: 'Success'})
      }
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
        return this.renderSearchResults()

      case 'Empty':
        return this.renderEmptyScreen()

      default:
        return null
    }
  }

  renderEmptyScreen = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoResultsContainer>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultHeading isDark={isDarkTheme}>
              No Search results found
            </NoResultHeading>
            <NoResultPara isDark={isDarkTheme}>
              Try different keyword or remove search filter
            </NoResultPara>
            <RetryButton type="button" onClick={this.onRetryCliked}>
              Retry
            </RetryButton>
          </NoResultsContainer>
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
            <RetryButton type="button" onClick={this.onRetryCliked}>
              Retry
            </RetryButton>
          </NoResultsContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

  renderSearchResults = () => {
    const {videoDetails} = this.state
    return (
      <ResultsUlContainer>
        {videoDetails.map(eachItem => (
          <VideoItem key={eachItem.id} details={eachItem} />
        ))}
      </ResultsUlContainer>
    )
  }

  render() {
    const {showBanner} = this.state
    return (
      <WatchAppContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <NavBar />
              <HomeMainContainer data-testid="home">
                <LeftSideBar />
                <HomeResultsContainer isDark={isDarkTheme}>
                  {showBanner && (
                    <BannerSection data-testid="banner">
                      <CloseButton type="button" onClick={this.onCloseClicked}>
                        <IoIosClose fontSize="36px" />
                      </CloseButton>
                      <BannerContents>
                        <NavImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <p>Buy Nxt Watch Premium prepaid with UPI</p>
                        <GetItNowBtn type="button">Get It Now</GetItNowBtn>
                      </BannerContents>
                    </BannerSection>
                  )}
                  <SearchInputContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      onChange={this.onInputChange}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      onClick={this.onSearchClick}
                    >
                      <IoIosSearch />
                    </SearchButton>
                  </SearchInputContainer>
                  {this.renderBasedOnApiStatus()}
                </HomeResultsContainer>
              </HomeMainContainer>
            </>
          )
        }}
      </WatchAppContext.Consumer>
    )
  }
}

export default Home
