import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'
import Cell from '../MemoryMatrixCell'
import MemoryMatrixRulesPopup from '../MemoryMatrixRulesModal'
import MemoryMatrixProgressBar from '../MemoryMatrixResultsPage'

class MemoryMatrixGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 0,
      gridSize: 3,
      array: [],
      clickedCellsCount: 0,
      showResults: false,
    }
  }

  componentDidMount() {
    const {level} = this.state
    this.setGridCells(level)
    this.timerId = setTimeout(() => this.goToResultsPage(), 8000)
  }

  componentWillUnmount() {
    clearTimeout(this.timerId)
  }

  onClickPlayAgain = () => {
    this.setState({
      showResults: false,
    })
    this.componentDidMount()
  }

  setGridCells = size => {
    const gridSize = size + 3
    const totalCells = gridSize * gridSize
    const numbersArray = Array.from({length: totalCells}, (_, index) => index)
    // eslint-disable-next-line
    const shuffledArray = numbersArray.sort(() => Math.random() - 0.5)

    // Get random cells with the same size as gridSize
    const randomIndices = new Set()
    while (randomIndices.size < gridSize) {
      randomIndices.add(Math.floor(Math.random() * totalCells))
    }

    const currentLevelGridCells = numbersArray.map(value => ({
      id: Math.random().toString(),
      isHidden: randomIndices.has(value),
    }))

    this.setState({
      gridSize,
      array: currentLevelGridCells,
      clickedCellsCount: 0,
    })
  }

  handleCellClick = index => {
    const {array, gridSize, clickedCellsCount, level} = this.state
    const updatedArray = [...array]
    updatedArray[index].isClicked = true
    if (updatedArray[index].isHidden) {
      updatedArray[index].isHidden = false
      if (clickedCellsCount + 1 === gridSize) {
        this.setState(prevState => ({level: prevState.level + 1}))
        this.setGridCells(level)
      }
    } else {
      clearTimeout(this.timerId)
      this.setState({showResults: true})
    }
    this.setState(prevState => ({
      clickedCellsCount: prevState.clickedCellsCount + 1,
      array: updatedArray,
    }))
    console.log(clickedCellsCount)
  }

  goToResultsPage = () => {
    const {level} = this.state
    this.setState({showResults: true})
    this.setGridCells(level)
  }

  render() {
    const {array, level, showResults, gridSize} = this.state

    return showResults ? (
      <MemoryMatrixProgressBar
        level={level + 1}
        onClickPlayAgain={this.onClickPlayAgain}
      />
    ) : (
      <div className="memory-matrix-bg">
        <div className="buttons-container">
          <Link to="/">
            <button className="back-btn" type="button">
              <BiArrowBack color="#ffffff" />
              <p>Back</p>
            </button>
          </Link>
          <MemoryMatrixRulesPopup />
        </div>
        <h1 className="memory-matrix-heading">Memory Matrix</h1>
        <p className="level-heading">Level - {level + 1}</p>
        <ul
          className="grid"
          style={{gridTemplateColumns: `repeat(${gridSize}, 1fr)`}}
        >
          {array.map(({id, isHidden}, index) => (
            <Cell
              key={id}
              isHidden={isHidden}
              isClicked={array[index].isClicked}
              onClick={() => this.handleCellClick(index)}
              hiddenCellsDisplayTime={gridSize * 1000} // Example time calculation, adjust as needed
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default MemoryMatrixGame
