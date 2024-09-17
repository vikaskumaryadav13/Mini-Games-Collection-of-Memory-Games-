import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import MemoryMatrixGame from '../MemoryMatrixGame'
import './index.css'

class MemoryMatrixHome extends Component {
  state = {showGame: false}

  onClickPlayButton = () => {
    this.setState({showGame: true})
  }

  renderRuleView = () => (
    <div className="memory-matrix-home-bg">
      <Link to="/">
        <button className="back-btn" type="button">
          <BiArrowBack color="#ffffff" />
          <p>Back</p>
        </button>
      </Link>
      <h1 className="game-heading">Memory Matrix</h1>
      <div>
        <img
          src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940282/memory_umdawk.png"
          alt="memory matrix"
          className="memory-matrix-image"
        />
      </div>
      <h1 className="rules-heading">Rules</h1>
      <ul className="rules-list">
        <li className="memory-matrix-rule-item">
          In each level of the Game, Users should be able to see the Grid with
          (N X N) size starting from 3 and the grid will highlight N cells in
          Blue, the N highlighted cells will be picked randomly.
        </li>
        <li className="memory-matrix-rule-item">
          The highlighted cells will remain N seconds for the user to memorize
          the cells. At this point, the user should not be able to perform any
          action.
        </li>
        <li className="memory-matrix-rule-item">
          After N seconds, the grid will clear the N highlighted cells.
        </li>
        <li className="memory-matrix-rule-item">
          At N seconds, the user can click on any cell. Clicking on a cell that
          was highlighted before it will turn blue. Clicking on the other cells
          that were not highlighted before then will turn to red.
        </li>
        <li className="memory-matrix-rule-item">
          The user should be promoted to the next level if they guess all N
          cells correctly in one attempt.
        </li>
        <li className="memory-matrix-rule-item">
          The user should be taken to the results page if the user clicks on the
          wrong cell.
        </li>
        <li className="memory-matrix-rule-item">
          If the user completed all the levels, then the user should be taken to
          the results page.
        </li>
      </ul>

      <button
        type="button"
        className="memory-matrix-start-btn"
        onClick={this.onClickPlayButton}
      >
        Start Playing
      </button>
    </div>
  )

  render() {
    const {showGame} = this.state

    return showGame ? <MemoryMatrixGame /> : this.renderRuleView()
  }
}

export default MemoryMatrixHome
