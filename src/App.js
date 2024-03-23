import {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import Trending from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVidoesRoute from './components/SavedVideosRoute'
import ProtectedRoute from './components/ProtectedRoute'
import WatchAppContext from './context/WatchAppContext'

class App extends Component {
  state = {
    isDarkTheme: false,
    isSaved: false,
    savedVideosList: [],
    isLiked: false,
    isDisLiked: false,
    activeBtn: '',
  }

  onThemeChange = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  onSavedClicked = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  onAddVideo = video => {
    const {savedVideosList, isSaved} = this.state

    const isVideoInList = savedVideosList.some(
      savedVideo => savedVideo.id === video.id,
    )

    if (isSaved) {
      if (isVideoInList) {
        this.setState(prevState => ({
          savedVideosList: prevState.savedVideosList.filter(
            savedVideo => savedVideo.id !== video.id,
          ),
        }))
      }
    } else {
      if (!isVideoInList) {
        this.setState(prevState => ({
          savedVideosList: [...prevState.savedVideosList, video],
        }))
      }
    }
  }

  onLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }))
  }

  onDisliked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
    }))
  }

  onActiveBtnChange = value => {
    this.setState({activeBtn: value})
  }

  render() {
    const {
      isDarkTheme,
      savedVideosList,
      isSaved,
      isLiked,
      isDisLiked,
      activeBtn,
    } = this.state
    return (
      <WatchAppContext.Provider
        value={{
          isDarkTheme,
          isSaved,
          isLiked,
          isDisLiked,
          activeBtn,
          onThemeChange: this.onThemeChange,
          savedVideosList,
          onAddVideo: this.onAddVideo,
          onSaved: this.onSavedClicked,
          onLiked: this.onLiked,
          onDisliked: this.onDisliked,
          onActiveBtnChange: this.onActiveBtnChange,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVidoesRoute}
          />
        </Switch>
      </WatchAppContext.Provider>
    )
  }
}

export default App
