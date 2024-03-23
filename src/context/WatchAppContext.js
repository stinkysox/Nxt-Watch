import {createContext} from 'react'

const WatchAppContext = createContext({
  isDarkTheme: true,
  isSaved: false,
  isLiked: false,
  isDisliked: false,
  onThemeChange: () => {},
  savedVideosList: [],
  onAddVideo: () => {},
  onSaved: () => {},
  onLiked: () => {},
  onDisliked: () => {},
  activeBtn: '',
  onActiveBtnChange: () => {},
})

export default WatchAppContext
