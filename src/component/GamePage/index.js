import {Component} from 'react'

import NavBar from '../NavBar'
import DisplayTab from '../DisplayTab'
import ListOfImages from '../ListOfImages'

import './index.css'

class GamePage extends Component {
  state = {
    score: 0,
    timer: 60,
    selectedId: 'FRUIT',
    imgId: '',
    imgUrl: '',
    gameOver: false,
  }

  componentDidMount() {
    this.timeId = setInterval(this.onCountDown, 1000)
    const {imagesList} = this.props
    this.setState({
      imgId: imagesList[0].id,
      imgUrl: imagesList[0].imageUrl,
    })
  }

  componentWillUnmount() {
    this.onClearingTime()
  }

  onClearingTime = () => {
    clearInterval(this.timeId)
  }

  onCountDown = () => {
    const {timer} = this.state
    const isTimeUp = timer === 0
    if (isTimeUp) {
      this.onClearingTime()
      this.setState({gameOver: true})
    } else {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
      }))
    }
  }

  onClickTab = id => {
    const {imagesList} = this.props
    const filteredList = imagesList.filter(eachList => eachList.category === id)
    this.setState({
      selectedId: id,
      imgId: filteredList[0].id,
      imgUrl: filteredList[0].imageUrl,
    })
  }

  gettingImgId = () => {
    const {imagesList} = this.props
    const {selectedId} = this.state
    const filteredList = imagesList.filter(
      eachList => eachList.category === selectedId,
    )
    const gottenIndex = Math.ceil(Math.random() * filteredList.length)
    const gottenId = filteredList[gottenIndex].id
    const Address = filteredList[gottenIndex].imageUrl
    console.log(gottenIndex)

    this.setState({
      imgId: gottenId,
      imgUrl: Address,
    })
  }

  onClickImg = id => {
    const {imgId} = this.state
    if (imgId === id) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.gettingImgId()
    } else {
      this.setState({gameOver: true})
      this.onClearingTime()
    }
  }

  onClickPlayAgain = () => {
    const {imagesList} = this.props

    this.setState({
      score: 0,
      timer: 60,
      selectedId: 'FRUIT',
      gameOver: false,
      imgId: imagesList[0].id,
      imgUrl: imagesList[0].imageUrl,
    })
    this.componentDidMount()
  }

  renderingGameover = () => {
    const {score} = this.state

    return (
      <div className="gameoverDisCon">
        <div className="gameoverCon">
          <img
            className="gameImg"
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
          />
          <p className="gameP">YOUR SCORE</p>
          <h1 className="gameMainP">{score}</h1>
          <button
            type="button"
            className="bton"
            onClick={this.onClickPlayAgain}
          >
            <img
              className="refresh"
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="refresh"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  renderingGame = () => {
    const {tabsList, imagesList} = this.props
    const {selectedId, imgUrl} = this.state
    const filteredList = imagesList.filter(
      eachList => eachList.category === selectedId,
    )

    return (
      <div className="displayCon">
        <div className="firstCon">
          <img src={imgUrl} alt="match" className="displayImg" />
        </div>
        <ul className="tabCon">
          {tabsList.map(eachTab => (
            <DisplayTab
              key={eachTab.tabId}
              tabDetails={eachTab}
              onClickTab={this.onClickTab}
              isActive={selectedId === eachTab.tabId}
            />
          ))}
        </ul>
        <ul className="ListCon">
          {filteredList.map(eachItem => (
            <ListOfImages
              key={eachItem.id}
              itemDetails={eachItem}
              onClickImg={this.onClickImg}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {score, timer, gameOver} = this.state

    return (
      <div className="mainCon">
        <NavBar score={score} timer={timer} />
        {gameOver ? this.renderingGameover() : this.renderingGame()}
      </div>
    )
  }
}

export default GamePage
