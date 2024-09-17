import {useState} from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'

import './index.css'

const MemoryMatrixRulesPopUp = () => {
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
        contentLabel="Memory Matrix Rules"
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
        <ul className="rules-list-popup">
          <li className="memory-matrix-rule-item-popup">
            In each level of the Game, Users should be able to see the Grid with
            (N X N) size starting from 3 and the grid will highlight N cells in
            Blue, the N highlighted cells will be picked randomly.
          </li>
          <li className="memory-matrix-rule-item-popup">
            The highlighted cells will remain N seconds for the user to memorize
            the cells. At this point, the user should not be able to perform any
            action.
          </li>
          <li className="memory-matrix-rule-item-popup">
            After N seconds, the grid will clear the N highlighted cells.
          </li>
          <li className="memory-matrix-rule-item-popup">
            At N seconds, the user can click on any cell. Clicking on a cell
            that was highlighted before it will turn blue. Clicking on the other
            cells that were not highlighted before then will turn to red.
          </li>
          <li className="memory-matrix-rule-item-popup">
            The user should be promoted to the next level if they guess all N
            cells correctly in one attempt.
          </li>
          <li className="memory-matrix-rule-item-popup">
            The user should be taken to the results page if the user clicks on
            the wrong cell.
          </li>
          <li className="memory-matrix-rule-item-popup">
            If the user completed all the levels, then the user should be taken
            to the results page.
          </li>
        </ul>
      </Modal>
    </div>
  )
}

export default MemoryMatrixRulesPopUp
