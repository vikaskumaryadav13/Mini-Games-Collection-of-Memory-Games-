import './index.css'

const GameStatusItem = props => {
  const {
    yourImg,
    oponentImg,
    gameStatus,
    onClickPlayAgain,
    score,
    opponentImgAltVal,
    youImgAltVal,
  } = props
  let emojiUrlScoreContainer = ''
  let emojiUrlStatusContainer = ''
  let emojiScoreAltValue = ''
  let emojiStatusAltValue = ''
  if (gameStatus === 'YOU WON') {
    emojiUrlScoreContainer =
      'https://res.cloudinary.com/dv6ikqksk/image/upload/v1709024798/Group_7618_xb0bdu.png'
    emojiUrlStatusContainer =
      'https://res.cloudinary.com/dv6ikqksk/image/upload/v1709024992/Emoji_v8wm0s.png'
    emojiStatusAltValue = 'Smiling face with star eyes'
    emojiScoreAltValue = 'won emoji'
  } else if (gameStatus === 'YOU LOSE') {
    emojiUrlScoreContainer =
      'https://res.cloudinary.com/dv6ikqksk/image/upload/v1709024956/Group_7618_2_ktonx1.png'
    emojiUrlStatusContainer =
      'https://res.cloudinary.com/dv6ikqksk/image/upload/v1709025064/Emoji_2_trusiz.png'
    emojiStatusAltValue = 'Frowning face'
    emojiScoreAltValue = 'lose emoji'
  } else {
    emojiUrlScoreContainer =
      'https://res.cloudinary.com/dv6ikqksk/image/upload/v1709024915/Group_7618_1_ljgkzj.png'
    emojiUrlStatusContainer =
      'https://res.cloudinary.com/dv6ikqksk/image/upload/v1709025027/Emoji_1_dk5rpf.png'
    emojiStatusAltValue = 'Face without mouth'
    emojiScoreAltValue = 'draw emoji'
  }

  return (
    <div className="game-status-container">
      <h1 className="game-heading-status">ROCK PAPER SCISSOR</h1>
      <div className="score-container">
        <h1 className="rps-heading">
          ROCK <br /> PAPER <br /> SCISSORS
        </h1>
        <img
          src={emojiUrlScoreContainer}
          className="score-container-emoji"
          alt={emojiScoreAltValue}
        />
        <div className="score-card">
          <p className="score-heading">SCORE</p>
          <p className="score-value">{score}</p>
        </div>
      </div>
      <div className="players-container">
        <p>You</p>
        <p>Opponent</p>
      </div>
      <div className="images-container-status">
        <img src={yourImg} alt={youImgAltVal} className="win-image" />
        <div className="result-container">
          <img
            src={emojiUrlStatusContainer}
            className="status-container-emoji"
            alt={emojiStatusAltValue}
          />
          <p className="status">{gameStatus}</p>
          <button
            type="button"
            className="button-playagain"
            onClick={onClickPlayAgain}
          >
            PLAY AGAIN
          </button>
        </div>
        <img src={oponentImg} alt={opponentImgAltVal} className="win-image" />
      </div>
    </div>
  )
}

export default GameStatusItem
