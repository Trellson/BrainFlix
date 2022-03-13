import CommnetSticker from "../../assets/Icons/add_comment.svg"
import "./commentsForm.scss"
export default function Upload(){

    return(
  

<div className="comments-form__container">
<form className="comments__form">
  <label className="comments__label">Join the Conversation</label>
  <textarea className="comments__textarea" type="text" placeholder="Add a comment to this video"></textarea>
  <div className="header__button--wrapper">
      <button className="header__button">
          <img className="header__button--sticker" src={CommnetSticker} alt="face"/> COMMENT
       </button>
  </div>     
</form>
</div>
)
}