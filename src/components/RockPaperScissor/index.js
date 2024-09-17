import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import RPSgame from '../RPSgame'
import './index.css'

class RPSgameHomePage extends Component {
  state = {showGame: false}

  onClickPlayButton = () => {
    this.setState({showGame: true})
  }

  renderRulesView = () => (
    <div className="rps-home-bg">
      <Link to="/">
        <button className="back-btn" type="button">
          <BiArrowBack color="#ffffff" />
          <p>Back</p>
        </button>
      </Link>
      <h1 className="game-heading">Rock Paper Scissor</h1>
      <img
        src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940372/Group_7469_pgztk8.png"
        alt="rock paper scissor"
        className="rps-image"
      />
      <h1 className="rules-heading">Rules</h1>
      <ul className="rules-list">
        <li className="rule-item">
          The game result should be based on user and user opponent choices
        </li>
        <li className="rule-item">
          When the user choice is rock and his opponent choice is rock then the
          result will be <span className="span-item">IT IS DRAW</span>
        </li>
        <li className="rule-item">
          When the user choice is paper and his opponent choice is paper then
          the result will be <span className="span-item">IT IS DRAW</span>
        </li>
        <li className="rule-item">
          When the user choice is scissors and his opponent choice is scissors
          then the result will be <span className="span-item">IT IS DRAW</span>
        </li>
        <li className="rule-item">
          When the user choice is paper and his opponent choice is rock then the
          result will be <span className="span-item">YOU WON</span>
        </li>
        <li className="rule-item">
          When the user choice is scissors and his opponent choice is paper then
          the result will be <span className="span-item">YOU WON</span>
        </li>
        <li className="rule-item">
          When the user choice is rock and his opponent choice is scissors then
          the result will be <span className="span-item">YOU WON</span>
        </li>
        <li className="rule-item">
          When the user choice is a scissors and his opponent choice is rock
          then the result will be <span className="span-item">YOU LOSE</span>
        </li>
        <li className="rule-item">
          When the user choice is a paper and his opponent choice is scissors
          then the result will be <span className="span-item">YOU LOSE</span>
        </li>
        <li className="rule-item">
          When the user choice is a rock and his opponent choice is paper then
          the result will be <span className="span-item">YOU LOSE</span>
        </li>
        <li className="rule-item">
          When the result is <span className="span-item">YOU WON</span>, then
          the count of the score should be incremented by 1
        </li>
        <li className="rule-item">
          When the result is <span className="span-item">YOU LOSE</span>, then
          the count of the score should be decremented by 1.
        </li>
      </ul>
      <button
        type="button"
        className="start-btn"
        onClick={this.onClickPlayButton}
      >
        Start playing
      </button>
    </div>
  )

  render() {
    const {showGame} = this.state
    return showGame ? <RPSgame /> : this.renderRulesView()
  }
}

export default RPSgameHomePage
