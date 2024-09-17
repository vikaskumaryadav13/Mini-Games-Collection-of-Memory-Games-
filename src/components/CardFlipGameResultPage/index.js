import './index.css'

const CardflipResultView = props => {
  const {score, cardsCount, onClickPlayAgain} = props
  const resEmojiImg =
    score < 10
      ? 'https://res.cloudinary.com/dv6ikqksk/image/upload/v1710321479/05_Pokerface_fuflif.png'
      : 'https://res.cloudinary.com/dv6ikqksk/image/upload/v1710321432/03_Optimistic_unob5o.png'
  const wishesText = score < 12 ? 'Better luck next time' : 'Congratulations'
  const feedback =
    score < 10
      ? 'You did not match all of the cards in record time'
      : 'You matched all of the cards in record time'
  const altValue = score < 10 ? 'neutral face' : 'grinning face with big eyes'
  return (
    <div className="cardflip-result-view-bg">
      <img src={resEmojiImg} alt={altValue} className="resEmojiImg" />
      <h1 className="wishes-text">{wishesText}</h1>
      <p className="flips">No.of Flips-{cardsCount}</p>
      <h1 className="desc">{feedback}</h1>
      <button
        type="button"
        className="play-again-btn"
        onClick={onClickPlayAgain}
      >
        Play Again
      </button>
    </div>
  )
}

export default CardflipResultView
