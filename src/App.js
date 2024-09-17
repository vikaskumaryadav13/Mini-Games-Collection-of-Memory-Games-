import {Switch, Route} from 'react-router-dom'
import Home from './components/GameRoute'
import RPSgameHomePage from './components/RockPaperScissor'
import EmojiRules from './components/EmojiRules'
import CardFlipHomePage from './components/Card-FlipMemoryGame'
import MemoryMatrixHome from './components/MemoryMatrix'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rock-paper-scissor" component={RPSgameHomePage} />
    <Route exact path="/emoji-game" component={EmojiRules} />
    <Route exact path="/card-flip-memory-game" component={CardFlipHomePage} />
    <Route exact path="/memory-matrix" component={MemoryMatrixHome} />
  </Switch>
)

export default App
