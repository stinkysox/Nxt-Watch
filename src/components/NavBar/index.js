import React from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdWbIncandescent} from 'react-icons/md'
import {IoIosCloudyNight} from 'react-icons/io'
import {IoMenu} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import WatchAppContext from '../../context/WatchAppContext'
import {
  NavBarContainer,
  NavOptionsContainer,
  NavImage,
  NavButton,
  LargeNav,
  SmallNav,
  LogoutBtn,
  PopUpContainer,
  CancelBtn,
  ConfirmBtn,
  LogoutText,
} from './styledComponents'

const NavBar = ({history}) => {
  const onConfirmClicked = () => {
    console.log('Hello')
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <WatchAppContext.Consumer>
      {value => {
        const {isDarkTheme, onThemeChange} = value

        return (
          <>
            <LargeNav isDark={isDarkTheme}>
              <NavBarContainer>
                <div className="nav-logo-container">
                  {isDarkTheme ? (
                    <NavImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="nxt watch logo"
                    />
                  ) : (
                    <NavImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                  )}
                </div>
                <NavOptionsContainer className="nav-options">
                  <div className="mode-section">
                    <NavButton
                      type="button"
                      aria-label="Toggle Dark Mode"
                      onClick={onThemeChange}
                      isDark={isDarkTheme}
                    >
                      {isDarkTheme ? (
                        <IoIosCloudyNight fontSize="28px" />
                      ) : (
                        <MdWbIncandescent fontSize="28px" />
                      )}
                    </NavButton>
                  </div>
                  <div className="nav-profile-container">
                    <NavButton>
                      <NavImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </NavButton>
                  </div>
                  <div className="btn-container">
                    <div className="popup-container">
                      <Popup
                        modal
                        trigger={
                          <LogoutBtn isDark={isDarkTheme} type="button">
                            Logout
                          </LogoutBtn>
                        }
                      >
                        {close => (
                          <PopUpContainer isDark={isDarkTheme}>
                            <LogoutText isDark={isDarkTheme}>
                              Are you sure you want to logout
                            </LogoutText>
                            <div>
                              <CancelBtn type="button" onClick={close}>
                                Cancel
                              </CancelBtn>
                              <ConfirmBtn
                                type="button"
                                onClick={onConfirmClicked}
                              >
                                Confirm
                              </ConfirmBtn>
                            </div>
                          </PopUpContainer>
                        )}
                      </Popup>
                    </div>
                  </div>
                </NavOptionsContainer>
              </NavBarContainer>
            </LargeNav>

            <SmallNav isDark={isDarkTheme}>
              <NavBarContainer>
                <div className="nav-logo-container">
                  <NavImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="webite logo"
                  />
                </div>
                <NavOptionsContainer className="nav-options">
                  <div className="mode-section">
                    <NavButton
                      type="button"
                      aria-label="Toggle Dark Mode"
                      onClick={onThemeChange}
                      isDark={isDarkTheme}
                      data-testid="theme"
                    >
                      {isDarkTheme ? (
                        <IoIosCloudyNight fontSize="28px" />
                      ) : (
                        <MdWbIncandescent fontSize="28px" />
                      )}
                    </NavButton>
                  </div>
                  <div className="nav-profile-container">
                    <NavButton isDark={isDarkTheme}>
                      <IoMenu fontSize="28px" />
                    </NavButton>
                  </div>
                  <div className="btn-container">
                    <NavButton type="button" isDark={isDarkTheme}>
                      <FiLogOut fontSize="28px" />
                    </NavButton>
                  </div>
                </NavOptionsContainer>
              </NavBarContainer>
            </SmallNav>
          </>
        )
      }}
    </WatchAppContext.Consumer>
  )
}

export default withRouter(NavBar)
