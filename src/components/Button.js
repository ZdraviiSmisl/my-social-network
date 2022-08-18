export const Button = ({children, type, onClick, btn, buttonStyle, buttonSize}) => {

  return (
    <button className={`${btn} ${buttonStyle} ${buttonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}