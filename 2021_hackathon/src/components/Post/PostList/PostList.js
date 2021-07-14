import useFetchPosts from "../../../hooks/useFetchPosts";
import "./PostList.scss";
import Profile from "../../../assets/profile.svg";
import Comment from "../../../assets/comment.svg";

const PostList = () => {
  const { data, onclick } = useFetchPosts();
  return (
    <>
      {data &&
        data.map((item, key) => (
          <div key={key} className="postList" onClick={() => onclick(item.id)}>
            <div className="postList-top">
              <div className="postList-top-profile">
                <div className="postList-top-profile-img">
                  <img src={Profile} alt="profile" />
                </div>
                <div className="postList-top-profile-name">
                  <span>{item.user.name}</span>
                </div>
              </div>
              <div className="postList-top-title" key={item.id}>
                {item.title}
              </div>
              <div className="postList-top-contents">{item.content}</div>
            </div>
            <div className="postList-bottom">
              <img src={Comment} alt="comment" />
              <span className="postList-bottom-comment">
                {item.commentsNum}
              </span>
              <span className="postList-bottom-date">{item.date}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;
