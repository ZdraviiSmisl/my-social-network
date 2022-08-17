import {useDispatch} from "react-redux";
import {nextItems} from "../store/action-creators";

export const Button = ({children, type, onClick, btn, buttonStyle, buttonSize}) => {
  const dispatch = useDispatch();

  const STYLES = [
    "btnPrimarySolid",
    "btnWarningSolid",
    "btnDangerSolid",
    "btnSuccessSolid",
    "btnPrimaryOutline",
    "btnWarningOutline",
    "btnSuccessOutline",
    "btnDangerOutline",
  ]

  const SIZES = ["btnMedium", "btnLarge"];


  return (
    <button className={`${btn} ${buttonStyle} ${buttonSize}`} onClick={() => dispatch(nextItems())} type={type}>
      {children}
    </button>
  )
}