import {useDispatch, useSelector} from "react-redux";
import {setReactions} from "../store/action-creators";
import reactionStyle from "../../styles/reactionButtons.module.scss"


const reactionsEmoji = {
  smile: "\u{1F601}",
  laughter: "\u{1F923}",
  thumbsUP: "\u{1F44D}",
  thumbsDown: "\u{1F44E}",
  handshake: "\u{1F91D}",
  bomb: "\u{1F4A3}",
  fire: "\u{1F525}",
}


const ReactionButtons = ({styleButtons}) => {
  const {reactions} = useSelector(state => state.postsReducer)

  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionsEmoji).map(([name, emoji]) => {
    return (
      <button key={name}
              type="button"
              className={reactionStyle.postButtonReaction}
              onClick={() => dispatch(setReactions({reaction: name}))
              }
      >  {emoji} {/*{reactions[name]}*/}

      </button>

    )
  })
  return <div className={styleButtons}>{reactionButtons}</div>

}

export default ReactionButtons;

