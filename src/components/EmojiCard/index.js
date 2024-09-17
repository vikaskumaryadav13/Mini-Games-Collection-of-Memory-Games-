import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickCard} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickEmoji = () => {
    onClickCard(id)
  }

  return (
    <li className="emoji-card" onClick={onClickEmoji}>
      <button type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-card-image" />
      </button>
    </li>
  )
}

export default EmojiCard
