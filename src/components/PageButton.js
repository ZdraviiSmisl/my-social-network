import {useDispatch} from "react-redux";
import {setSkipPosts} from "../store/action-creators-posts";
import stylePage from "../../styles/PageButton.module.scss"

export const PageButton = ({page, type, limitItems}) => {
  const dispatch = useDispatch()
  return (
    <button className={stylePage.pageNumber} onClick={() => dispatch(setSkipPosts((page - 1) * limitItems))}
            type={type}>{page}</button>
  )
}