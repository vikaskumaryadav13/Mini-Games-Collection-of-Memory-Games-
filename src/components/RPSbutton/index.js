import './index.css'

const Button = props => {
  const {buttonDetails, onClickButton} = props
  const {imageUrl, id} = buttonDetails
  const testid = id.toLowerCase().concat('Button')
  const altVal = id.toLowerCase()

  const onClickBtn = () => {
    onClickButton(id)
  }

  return (
    <li className="list-item">
      <button type="button" data-testid={testid} onClick={onClickBtn}>
        <img src={imageUrl} className="image" alt={altVal} />
      </button>
    </li>
  )
}

export default Button
