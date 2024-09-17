import {useState} from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'

import './index.css'

const CardFlipRulesPopUp = () => {
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
        contentLabel="Card Flip Rules"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button
          type="button"
          className="cross-icon"
          data-testid="close"
          onClick={closeModal}
        >
          <CgClose />
        </button>
        <h1 className="rules-heading-popup">Rules</h1>
        <ul className="cardflip-rules-list-popup">
          <li className="rule-item-popup">
            When the game is started, the users should be able to see the list
            of Cards that are shuffled and turned face down.
          </li>
          <li className="rule-item-popup">
            When a user starts the game, the user should be able to see the
            Timer running.
          </li>
          <li className="rule-item-popup">The Timer starts from 2 Minutes.</li>
          <li className="rule-item-popup">
            If the two cards have the same image, they remain face up. If not,
            they should be flipped face down again after a short 2 seconds.
          </li>
          <li className="rule-item-popup">
            Users should be able to compare only two cards at a time.
          </li>
          <li className="rule-item-popup">
            When the user is not able to find all the cards before the timer
            ends then the game should end and redirect to the Time Up Page.
          </li>
          <li className="rule-item-popup">
            If the user finds all the matching cards before the timer ends, then
            the user should be redirected to the results page.
          </li>
        </ul>
      </Modal>
    </div>
  )
}

export default CardFlipRulesPopUp
