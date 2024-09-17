import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import EmojiGame from '../EmojiGame'
import './index.css'

class EmojiRules extends Component {
  state = {showGame: false}

  onClickPlayButton = () => {
    this.setState({showGame: true})
  }

  renderRulesView = () => (
    <div className="emoji-rules-bg">
      <h1 className="emoji-game-heading">Emoji Game</h1>
      <Link to="/">
        <button className="back-button" type="button">
          <BiArrowBack color="#334155" />
          <p className="back-btn-text">Back</p>
        </button>
      </Link>
      <div className="rules-container">
        <img
          src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940215/Group_7471_ghhl2x.png"
          className="emoji-image"
          alt="emoji game"
        />
        <div className="rules-part">
          <h1 className="rules-heading">Rules</h1>
          <ul className="rules-list">
            <li className="rules-list-item">
              User should be able to see the list of Emojis
            </li>
            <li className="rules-list-item">
              When the user clicks any one of the Emoji for the first time, then
              the count of the score should be incremented by 1 and the List of
              emoji cards should be shuffled.
            </li>
            <li className="rules-list-item">
              This process should be repeated every time the user clicks on an
              emoji card
            </li>
            <li className="rules-list-item">
              When the user clicks on all Emoji cards without clicking any of it
              twice, then the user will win the game
            </li>
            <li className="rules-list-item">
              When the user clicks on the same Emoji for the second time, then
              the user will lose the game.
            </li>
            <li className="rules-list-item">
              Once the game is over, the user will be redirected to the results
              page.
            </li>
          </ul>
          <button
            type="button"
            className="start-button"
            onClick={this.onClickPlayButton}
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  )

  render() {
    const {showGame} = this.state

    return showGame ? <EmojiGame /> : this.renderRulesView()
  }
}

export default EmojiRules
