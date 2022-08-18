import {useDispatch} from "react-redux";
import {nextItems, prevItems} from "../store/action-creators";
import btnTurn from "../../styles/ButtonTurnsPage.module.scss"
import {PageButton} from "./PageButton";


export default function Pagination({totalItems, skipItems, limitItems, pages}) {
  const dispatch = useDispatch();
  return (
    <>
      <nav>
        <div className="mt-0 mb-[20px] mx-auto grid grid-flow-col">
          <button
            className={btnTurn.turn}
            onClick={() => dispatch(prevItems(15))}
            disabled={skipItems === limitItems}>&lt;&lt;</button>
          {pages && pages.map(page => <PageButton key={page} page={page} type="button" limitItems={limitItems}/>)}
          <button className={`${btnTurn.turn} ${btnTurn.turnRight}`} onClick={() => dispatch(nextItems(15))}
                  disabled={skipItems === (totalItems - limitItems)}>&gt;&gt;</button>
        </div>
      </nav>

    </>
  )

}