import React from 'react'
import {IoHomeSharp} from 'react-icons/io5'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {HiOutlineSaveAs} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {
  LeftSideBgContainer,
  CategorySelectionContainer,
  CategoryOption,
  OptionName,
  LeftBarFooterSection,
  SocialMediaLogosContainer,
  SocialImage,
  FooterHeading,
  FooterPara,
} from './styledComponents'

import WatchAppContext from '../../context/WatchAppContext'

const LeftSideBar = () => (
  <WatchAppContext.Consumer>
    {value => {
      const {isDarkTheme, onActiveBtnChange, activeBtn} = value

      const handleBtnChange = value => {
        onActiveBtnChange(value)
      }

      return (
        <LeftSideBgContainer isDark={isDarkTheme}>
          <CategorySelectionContainer>
            <Link to="/">
              <CategoryOption
                onClick={() => handleBtnChange('home')}
                active={activeBtn === 'home'}
              >
                <IoHomeSharp fontSize="24px" />
                <OptionName isDark={isDarkTheme}>Home</OptionName>
              </CategoryOption>
            </Link>

            <Link to="/trending">
              <CategoryOption
                onClick={() => handleBtnChange('trending')}
                active={activeBtn === 'trending'}
              >
                <FaFire fontSize="24px" />
                <OptionName isDark={isDarkTheme}>Trending</OptionName>
              </CategoryOption>
            </Link>

            <Link to="/gaming">
              <CategoryOption
                onClick={() => handleBtnChange('gaming')}
                active={activeBtn === 'gaming'}
              >
                <SiYoutubegaming fontSize="24px" />
                <OptionName isDark={isDarkTheme}>Gaming</OptionName>
              </CategoryOption>
            </Link>

            <Link to="/saved-videos">
              <CategoryOption
                onClick={() => handleBtnChange('saved')}
                active={activeBtn === 'saved'}
              >
                <HiOutlineSaveAs fontSize="24px" />
                <OptionName isDark={isDarkTheme}>Saved Videos</OptionName>
              </CategoryOption>
            </Link>
          </CategorySelectionContainer>

          <LeftBarFooterSection>
            <FooterHeading isDark={isDarkTheme}>Contact Us</FooterHeading>
            <SocialMediaLogosContainer>
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />

              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </SocialMediaLogosContainer>
            <FooterPara isDark={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations
            </FooterPara>
          </LeftBarFooterSection>
        </LeftSideBgContainer>
      )
    }}
  </WatchAppContext.Consumer>
)

export default LeftSideBar
