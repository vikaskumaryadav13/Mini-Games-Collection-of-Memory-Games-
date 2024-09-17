import {Component} from 'react'
import './index.css'

class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldShowHiddenCells: true,
    }
    this.timerId = null
  }

  componentDidMount() {
    const {hiddenCellsDisplayTime} = this.props
    this.timerId = setTimeout(() => {
      // Store the timerId
      this.setState({shouldShowHiddenCells: false})
    }, hiddenCellsDisplayTime)
  }

  componentWillUnmount() {
    clearTimeout(this.timerId) // Clear the timer in componentWillUnmount
  }

  render() {
    const {isHidden, isClicked, onClick} = this.props
    const {shouldShowHiddenCells} = this.state
    const cellStyle = {}
    let dataTestid = ''
    if (isClicked) {
      if (isHidden) {
        cellStyle.backgroundColor = 'red'
      } else {
        cellStyle.backgroundColor = 'blue'
      }
    }

    if (isHidden) {
      dataTestid = 'highlighted'
    } else {
      dataTestid = 'notHighlighted'
    }
    return (
      <li>
        <button
          className={`cell ${
            isHidden && shouldShowHiddenCells ? 'highlighted' : ''
          }`}
          data-testid={dataTestid}
          style={cellStyle}
          onClick={onClick}
          tabIndex={0}
          type="button"
        >
          {}
        </button>
      </li>
    )
  }
}

export default Cell
