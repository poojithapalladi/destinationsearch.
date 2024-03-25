import './index.css'

const DestinationItem = props => {
  const {destinationsList, deleteUser} = props
  const {imageUrl, name, id} = destinationsList
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <div className="place-details-container">
      <img src={imageUrl} className="image" alt="destinationsList" />
      <h1 className="user-name"> {name} </h1>
      <button className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
      </button>
    </div>
  )
}
export default DestinationItem
