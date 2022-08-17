import {useDispatch} from "react-redux";
import {setSkipPosts} from "../store/action-creators";
import stylePage from "../../styles/PageButton.module.scss"

export const PageButton = ({page, type, limitItems}) => {
  const dispatch = useDispatch()
  return (
    <button className={stylePage.pageNumber} onClick={() => dispatch(setSkipPosts(page * limitItems))}
            type={type}>{page}</button>
  )
}