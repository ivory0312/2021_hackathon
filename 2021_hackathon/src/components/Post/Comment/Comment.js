import "./Comment.scss";
import Profile from "../../../assets/profile.svg";

const Comment = ({ message }) => {
  return (
    <div className="comment">
      <div className="comment-profile">
        <img className="comment-profile-img" src={Profile} alt="profile" />
        <div className="comment-profile-box">
          <div>
            <span className="comment-profile-box-name">익명</span>
            <span className="comment-profile-box-date">7월 14일 1:21</span>
          </div>
          <div className="comment-text">{message}</div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
