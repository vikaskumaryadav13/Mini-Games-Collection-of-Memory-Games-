import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import CardFlipRulesPopup from '../CardFlipModal'
import CardflipResultView from '../CardFlipGameResultPage'
import './index.css'

const cardsData = [
  {
    id: uuidv4(),
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: uuidv4(),
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: uuidv4(),
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: uuidv4(),
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: uuidv4(),
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: uuidv4(),
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: uuidv4(),
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: uuidv4(),
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: uuidv4(),
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: uuidv4(),
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
  {
    id: uuidv4(),
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
  },
  {
    id: uuidv4(),
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
  },
  {
    id: uuidv4(),
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
  },
  {
    id: uuidv4(),
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
  },
  {
    id: uuidv4(),
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
  },
  {
    id: uuidv4(),
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
  },
  {
    id: uuidv4(),
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
  },
  {
    id: uuidv4(),
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
  },
  {
    id: uuidv4(),
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
  },
  {
    id: uuidv4(),
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
  },
]

class MemoryGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: cardsData.sort(() => Math.random() - 0.5),
      selectedCards: [],
      timerMinutes: 2,
      timerSeconds: '',
      cardsCount: 0,
      lowestCardsCount: 0,
      score: 0,
      isGameover: false,
    }
    this.timerInterval = null
  }

  componentDidMount() {
    const {isGameover, timerMinutes, score} = this.state
    if (timerMinutes === 0 || score === 10) {
      clearInterval(this.timerId)
      this.setState({isGameover: true})
    } else if (isGameover === false) {
      this.startTimer()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({isGameover: !prevState.isGameover}))
    this.setState({
      cards: cardsData.sort(() => Math.random() - 0.5),
      score: 0,
      timerMinutes: 2,
      timerSeconds: '',
      cardsCount: 0,
      selectedCards: [],
    })
    this.componentDidMount()
  }

  startTimer = () => {
    // Clear any existing timer interval before starting a new one
    clearInterval(this.timerInterval)

    // Set the timer duration
    // eslint-disable-next-line
    const timerDuration = 2 * 60 // 2 minutes in seconds

    // Start the timer interval
    this.timerInterval = setInterval(() => {
      // Get remaining time
      const {timerMinutes, timerSeconds} = this.state

      // If time is up, clear the interval
      if (timerMinutes === 0 && timerSeconds === 0) {
        clearInterval(this.timerInterval)
        // Handle game over or any other logic here
      } else {
        // Calculate remaining time
        let newTimerMinutes = timerMinutes
        let newTimerSeconds = timerSeconds - 1

        // If seconds become negative, decrease minutes and reset seconds to 59
        if (newTimerSeconds < 0) {
          newTimerMinutes -= 1
          newTimerSeconds = 59
        }

        // Update the state with new timer values
        this.setState({
          timerMinutes: newTimerMinutes,
          timerSeconds: newTimerSeconds,
        })
      }
    }, 1000) // Update the timer every second
  }

  handleCardClick = card => {
    const {selectedCards, cards} = this.state
    if (selectedCards.length < 2 && !card.flipped) {
      const updatedCards = cards.map(c =>
        c.id === card.id ? {...c, flipped: true} : c,
      )
      this.setState(
        {
          selectedCards: [...selectedCards, card],
          cards: updatedCards,
        },
        this.checkForMatch,
      )
    }
  }

  checkForMatch = () => {
    const {selectedCards} = this.state
    if (selectedCards.length === 2) {
      if (selectedCards[0].name === selectedCards[1].name) {
        setTimeout(this.removeMatchedCards, 1000)
        this.setState(prevState => ({
          cardsCount: prevState.cardsCount + 1,
        }))
        this.setState(prevState => ({score: prevState.score + 1}))
      } else {
        setTimeout(this.resetSelectedCards, 1000)
      }
    }
  }

  removeMatchedCards = () => {
    const {cards, selectedCards} = this.state
    const updatedCards = cards.map(card =>
      selectedCards.find(c => c.id === card.id)
        ? {...card, flipped: true, matched: true}
        : card,
    )
    this.setState({
      cards: updatedCards,
      selectedCards: [],
    })
  }

  resetSelectedCards = () => {
    const {cards, selectedCards} = this.state
    const updatedCards = cards.map(card =>
      selectedCards.find(c => c.id === card.id)
        ? {...card, flipped: false}
        : card,
    )
    this.setState({cards: updatedCards, selectedCards: []})
  }

  renderGameView = () => {
    const {cards, lowestCardsCount} = this.state
    const {score, timerMinutes, timerSeconds, cardsCount} = this.state
    console.log(cards.length)
    console.log(cards)
    return (
      <div className="cardflip-play-bg">
        <div className="buttons-container">
          <Link to="/">
            <button className="cardflip-back-btn" type="button">
              <BiArrowBack color="#ffffff" />
              <p>Back</p>
            </button>
          </Link>
          <CardFlipRulesPopup />
        </div>
        <h1 className="cardflip-game-heading">Card-Flip Memory Game</h1>
        <p className="timer">
          {timerMinutes}:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
        </p>
        <div className="sm-score-container-1">
          <p className="sm-sub-headings">
            Lowest Flip Count - {lowestCardsCount}
          </p>
          <p className="sm-timer">
            {timerMinutes}:
            {timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
          </p>
        </div>
        <div className="sm-score-container-1">
          <p className="sm-sub-headings">Card flip count - {cardsCount}</p>
          <p className="sm-sub-headings">Score - {score}</p>
        </div>
        <div className="cardflips-score-container">
          <p className="sub-headings">Card flip count - {cardsCount}</p>
          <p className="sub-headings">Lowest flip count - {lowestCardsCount}</p>
          <p className="sub-headings">Score - {score}</p>
        </div>
        <ul className="cards-container-bg">
          {cards.map(card => (
            <li>
              <button
                type="button"
                key={card.id}
                data-testid={card.name}
                className={`card ${card.flipped ? 'flipped' : ''} ${
                  card.matched ? 'matched' : ''
                }`}
                onClick={() => this.handleCardClick(card)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img
                      src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1710310711/foot-print_20_kjadd2.png"
                      className="footprint-img"
                      alt="footprint"
                    />
                  </div>
                  <div className="card-back">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="animal-image"
                    />
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isGameover, cardsCount, score} = this.state

    return isGameover ? (
      <CardflipResultView
        score={score}
        cardsCount={cardsCount}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    ) : (
      this.renderGameView()
    )
  }
}

export default MemoryGame
