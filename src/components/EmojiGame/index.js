import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import EmojiCard from '../EmojiCard'
import EmojiGameResult from '../EmojiGameResultView'
import EmojiRulesPopup from '../EmojiRulesModal'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visitedEmojiIds: new Set(), // Initialize visitedEmojiIds as an empty set
      score: 0,
      isGameOver: false,
      initialEmojisList: emojisList,
      topScore: 0,
      scoresList: [],
    }
  }

  shuffleCards = list => {
    const shuffledList = list.sort(() => Math.random() - 0.5)
    return shuffledList
  }

  onClickEmojiCard = id => {
    const {visitedEmojiIds} = this.state

    this.setState({
      initialEmojisList: emojisList.sort(() => Math.random() - 0.5),
    })

    if (!visitedEmojiIds.has(id)) {
      this.setState(
        prevState => ({
          visitedEmojiIds: new Set(prevState.visitedEmojiIds).add(id),
          score: prevState.score + 1,
        }),
        () => {
          const {score} = this.state
          if (score === 12) {
            this.setState({isGameOver: true})
          }
        },
      )
    } else {
      this.setState({isGameOver: true})
    }
  }

  onClickPlayAgain = () => {
    const {scoresList} = this.state
    scoresList.sort()
    console.log(scoresList.sort())
    const updatedTopScore = scoresList[scoresList.length - 1]
    this.setState({
      isGameOver: false,
      score: 0,
      topScore: updatedTopScore,
    })
  }

  renderPlayView = () => {
    const {score, initialEmojisList, topScore} = this.state

    return (
      <>
        <div className="bg-conatiner">
          <div className="header">
            <div className="logo-part">
              <img
                src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1710237234/wink_1_ipcfyz.png"
                className="logo-img"
                alt="emoji logo"
              />
              <h1 className="emoji-game-heading">Emoji Game</h1>
            </div>
            <div className="emoji-scores-container">
              <p className="score-heading">Top Score: {topScore}</p>
              <p className="score-heading">Score: {score}</p>
            </div>
          </div>
          <div className="emoji-buttons-container">
            <Link to="/">
              <button className="emoji-back-button" type="button">
                <BiArrowBack color="black" />
                <p>Back</p>
              </button>
            </Link>
            <EmojiRulesPopup />
          </div>
          <ul className="emojis-list">
            {initialEmojisList.map(each => (
              <EmojiCard
                key={each.id}
                emojiDetails={each}
                onClickCard={this.onClickEmojiCard}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderResultView = () => {
    const {score} = this.state
    return (
      <EmojiGameResult score={score} onClickPlayAgain={this.onClickPlayAgain} />
    )
  }

  render() {
    const {isGameOver} = this.state

    return isGameOver ? this.renderResultView() : this.renderPlayView()
  }
}

export default EmojiGame
