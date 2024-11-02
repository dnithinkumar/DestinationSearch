// Write your code here
import './index.css'

const DestinationItem = props => {
  const {searchDetails} = props
  const {name, imgUrl} = searchDetails

  return (
    <li className="des-item-container">
      <div className="des-item">
        <img src={imgUrl} alt={name} className="image" />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
