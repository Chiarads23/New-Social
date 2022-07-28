import './index.css';

const Button = ({btnTextContent="Click", color="#bd637e", type="button", onHandleClick=(() => {})}) => {
  return (
    <button onClick={onHandleClick} type={type} className="Button" style={{ backgroundColor: color }}>{ btnTextContent }</button>
  )
}

export default Button;