import React from 'react'
import {HiOutlineSave} from 'react-icons/hi'
import NavBar from '../NavBar'
import LeftSideBar from '../LeftSideBar'
import WatchAppContext from '../../context/WatchAppContext'
import SavedVideoItem from '../SavedVideoItem'

import {
  VideoDetailsBgContainer,
  VideoDetailsContainer,
  ResultsUlContainer,
  BannerBgContainer,
  BannerContainer,
  RoundContainer,
  BannerHeading,
  NoResultsImage,
  NoResultsContainer,
  NoResultPara,
  NoResultHeading,
} from './styledComponents'

const SavedVideos = () => {
  const renderSuccessResults = () => (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value
        return (
          <ResultsUlContainer>
            <BannerBgContainer data-testid="banner" isDark={isDarkTheme}>
              <BannerContainer>
                <RoundContainer isDark={isDarkTheme}>
                  <HiOutlineSave fontSize="26px" color="#ff0b37" />
                </RoundContainer>
                <BannerHeading isDark={isDarkTheme}>Saved Videos</BannerHeading>
              </BannerContainer>
            </BannerBgContainer>
            {savedVideosList.length !== 0 ? (
              savedVideosList.map(eachItem => (
                <SavedVideoItem key={eachItem.id} details={eachItem} />
              ))
            ) : (
              <NoResultsContainer>
                <NoResultsImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoResultHeading isDark={isDarkTheme}>
                  No saved videos found
                </NoResultHeading>
                <NoResultPara isDark={isDarkTheme}>
                  You can save your vidoes while watching them
                </NoResultPara>
              </NoResultsContainer>
            )}
          </ResultsUlContainer>
        )
      }}
    </WatchAppContext.Consumer>
  )

  return (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <NavBar />
            <VideoDetailsBgContainer data-testid="gaming" isDark={isDarkTheme}>
              <LeftSideBar />
              <VideoDetailsContainer isDark={isDarkTheme}>
                {renderSuccessResults()}
              </VideoDetailsContainer>
            </VideoDetailsBgContainer>
          </>
        )
      }}
    </WatchAppContext.Consumer>
  )
}

export default SavedVideos
