import {useState} from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'

import './index.css'

const EmojiRulesPopUp = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button
        type="button"
        className="trigger-button"
        onClick={() => setModalIsOpen(true)}
      >
        RULES
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Emoji Rules"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button
          type="button"
          data-testid="close"
          className="emoji-cross-icon"
          onClick={closeModal}
        >
          <CgClose />
        </button>
        <h1 className="emoji-rules-heading-popup">Rules</h1>
        <ul className="emoji-rules-list-popup">
          <li className="emoji-rule-item-popup">
            User should be able to see the list of Emojis
          </li>
          <li className="emoji-rule-item-popup">
            When the user clicks any one of the Emoji for the first time, then
            the count of the score should be incremented by 1 and the List of
            emoji cards should be shuffled.
          </li>
          <li className="emoji-rule-item-popup">
            This process should be repeated every time the user clicks on an
            emoji card
          </li>
          <li className="emoji-rule-item-popup">
            When the user clicks on all Emoji cards without clicking any of it
            twice, then the user will win the game
          </li>
          <li className="emoji-rule-item-popup">
            When the user clicks on the same Emoji for the second time, then the
            user will lose the game.
          </li>
          <li className="emoji-rule-item-popup">
            Once the game is over, the user will be redirected to the results
            page.
          </li>
        </ul>
      </Modal>
    </div>
  )
}

export default EmojiRulesPopUp
