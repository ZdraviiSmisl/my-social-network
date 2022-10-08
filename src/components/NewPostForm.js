import React, {useState} from 'react';
import stylesPost from "../../styles/NewPost.module.scss"
import {Button} from "./Button";
import custom from "../../styles/Button.module.scss"
import {useDispatch} from "react-redux";
import {addNewPost} from "../store/action-creators-posts";

const NewPostForm = () => {
  const [body, setBody] = useState("");
  const dispatch = useDispatch();



  const onSubmitDataPost = async (e) => {
    e.preventDefault();
    if (body) {
      dispatch(addNewPost({
        title: "I am in love with someone.",
        userId: 5,
        body,
        reactions: 4,
        tags: ["react", "redux", "next.js", "node.js"],
      }))
    }
  }


  return (
    <section>
      <div>
        <form className={stylesPost.newPostForm} onSubmit={onSubmitDataPost}>
          <label htmlFor="content"/>
          <textarea className={stylesPost.newPostText} id="content" name="contentTitle" value={body}
                    onChange={(e) => setBody(e.target.value)} placeholder="What do you think about all this?"/>
          <Button type="submit" text="Add Post" btn={custom.btn} buttonSize={custom.btnAddPost}
                  buttonStyle={`${custom.btnPrimarySolid}`}/>
        </form>
      </div>
    </section>
  );
};

export default NewPostForm;