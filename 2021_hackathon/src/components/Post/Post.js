// import useFetchPost from "../../hooks/useFetchPost";
import "./Post.scss";
import PageTemplate from "../Common/PageTemplate/PageTemplate";
import Comment from "../../components/Post/Comment/Comment";
import Profile from "../../assets/profile.svg";
import CommentIcon from "../../assets/comment.svg";

const Post = () => {
  // const { data } = useFetchPost();

  return (
    <>
      <PageTemplate>
        {/* <div className="post">{data?.data.title}</div> */}
        <div>
          <div className="post">
            <div className="post-profile">
              <img className="post-profile-img" src={Profile} alt="profile" />
              <span className="post-profile-name">익명</span>
              <span className="post-profile-date">7월 14일 1:20</span>
            </div>
            <div className="post-header">
              <span className="post-header-title">익명 게시판</span>
            </div>
            <div>만들었습니다</div>
          </div>
          <div className="count">
            <img className="count-img" src={CommentIcon} alt="comment" />
            <span className="count-counter">댓글 2개</span>
          </div>
          <Comment
            name={"익명1"}
            date={"7월 14일 1:21"}
            message={"댓글 하나"}
          />
          <Comment name={"익명2"} date={"7월 14일 4:33"} message={"댓글 둘"} />
        </div>
      </PageTemplate>
    </>
  );
};

export default Post;
