import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div className="scoreCon">
        <p className="navText">
          Score: <span className="spanEl">{score}</span>
        </p>
        <div className="timerCon">
          <img
            className="timerImg"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="spanEl">{timer} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
