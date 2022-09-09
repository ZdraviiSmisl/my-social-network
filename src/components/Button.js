export const Button = ({text, type, onClick, btn, buttonStyle, buttonSize}) => {

  return (
    <button className={`${btn} ${buttonStyle} ${buttonSize}`} onClick={onClick} type={type}>
      {text}
    </button>
  )
}