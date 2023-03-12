import './index.css'

const ListOfImages = props => {
  const {itemDetails, onClickImg} = props
  const {id, thumbnailUrl} = itemDetails

  const gettingImgId = () => {
    onClickImg(id)
  }

  return (
    <li className="imgItem">
      <button type="button" onClick={gettingImgId} className="imgBton">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbImg" />
      </button>
    </li>
  )
}

export default ListOfImages
