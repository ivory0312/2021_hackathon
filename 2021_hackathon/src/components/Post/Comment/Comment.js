import "./Comment.scss";
import Profile from "../../../assets/profile.svg";

const Comment = ({ name, date, message }) => {
  return (
    <div className="comment">
      <div className="comment-profile">
        <img className="comment-profile-img" src={Profile} alt="profile" />
        <div className="comment-profile-box">
          <div>
            <span className="comment-profile-box-name">{name}</span>
            <span className="comment-profile-box-date">{date}</span>
          </div>
          <div className="comment-text">{message}</div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
