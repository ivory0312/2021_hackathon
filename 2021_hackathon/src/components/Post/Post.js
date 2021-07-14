import useFetchPost from "../../hooks/useFetchPost";
import "./Post.scss";
import PageTemplate from "../Common/PageTemplate/PageTemplate";
import Comment from "../../components/Post/Comment/Comment";
import Profile from "../../assets/profile.svg";
import CommentIcon from "../../assets/comment.svg";
import useFetchComment from "../../hooks/useFetchComment";

const Post = () => {
  const { data } = useFetchPost();
  const { item } = useFetchComment();

  return (
    <>
      <PageTemplate>
        <div>
          <div className="post">
            <div className="post-profile">
              <img className="post-profile-img" src={Profile} alt="profile" />
              <span className="post-profile-name">익명</span>
              <span className="post-profile-date">{data.date}</span>
            </div>
            <div className="post-header">
              <span className="post-header-title">{data?.title}</span>
            </div>
            <div>{data.content}</div>
          </div>
          <div className="count">
            <img className="count-img" src={CommentIcon} alt="comment" />
            <span className="count-counter">{data.commentsNum}</span>
          </div>
          {item.map((item) => (
            <Comment
              name={item.user.name}
              date={item.date}
              message={item.comment}
            />
          ))}
        </div>
      </PageTemplate>
    </>
  );
};

export default Post;
