import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <div className="bg-container">
          <h1 className="main-heading">Games</h1>
          <ul className="games-list-container">
            <Link to="/emoji-game">
              <li className="game-card">
                <img
                  src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940215/Group_7471_ghhl2x.png"
                  className="emoji-game-image"
                  alt="emoji game"
                />
              </li>
            </Link>
            <Link to="/memory-matrix">
              <li className="game-card">
                <p className="game-name">Memory Matrix</p>
                <img
                  src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940282/memory_umdawk.png"
                  className="emoji-game-image"
                  alt="memory matrix"
                />
              </li>
            </Link>
            <Link to="/rock-paper-scissor">
              <li className="game-card">
                <p className="game-name">ROCK PAPER SCISSOR</p>
                <img
                  src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940372/Group_7469_pgztk8.png"
                  className="emoji-game-image"
                  alt="rock paper scissor"
                />
              </li>
            </Link>
            <Link to="/card-flip-memory-game">
              <li className="game-card">
                <img
                  src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708931172/animals_cfihi9.png"
                  className="emoji-game-image"
                  alt="card flip memory game"
                />
              </li>
            </Link>
          </ul>
        </div>
      </>
    )
  }
}

export default Home
