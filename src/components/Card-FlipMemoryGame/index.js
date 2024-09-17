import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import MemoryGame from '../CardFlipGame'
import './index.css'

class CardFlipHomePage extends Component {
  state = {showGame: false}

  onClickPlayButton = () => {
    this.setState({showGame: true})
  }

  renderRulesView = () => (
    <div className="cardflip-home-bg">
      <Link to="/">
        <button className="cardflip-back-btn" type="button">
          <BiArrowBack color="#ffffff" />
          <p>Back</p>
        </button>
      </Link>
      <img
        src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1710303526/animals_1_wncxgk.png"
        alt="card flip memory game"
        className="cardflip-image"
      />
      <h1 className="rules-heading">Rules</h1>
      <ul className="cardflip-rules-list">
        <li className="rule-item">
          When the game is started, the users should be able to see the list of
          Cards that are shuffled and turned face down.
        </li>
        <li className="rule-item">
          When a user starts the game, the user should be able to see the Timer
          running.
        </li>
        <li className="rule-item">The Timer starts from 2 Minutes.</li>
        <li className="rule-item">
          If the two cards have the same image, they remain face up. If not,
          they should be flipped face down again after a short 2 seconds.
        </li>
        <li className="rule-item">
          Users should be able to compare only two cards at a time.
        </li>
        <li className="rule-item">
          When the user is not able to find all the cards before the timer ends
          then the game should end and redirect to the Time Up Page.
        </li>
        <li className="rule-item">
          If the user finds all the matching cards before the timer ends, then
          the user should be redirected to the results page.
        </li>
      </ul>
      <button
        type="button"
        className="start-btn"
        onClick={this.onClickPlayButton}
      >
        Start Playing
      </button>
    </div>
  )

  render() {
    const {showGame} = this.state

    return showGame ? <MemoryGame /> : this.renderRulesView()
  }
}

export default CardFlipHomePage
