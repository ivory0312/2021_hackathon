import useFetchPost from "../../hooks/useFetchPost";
import PageTemplate from "../Common/PageTemplate/PageTemplate";

const Post = () => {
  const { data } = useFetchPost();

  return (
    <>
      <PageTemplate>
        <div className="post">{data?.data.title}</div>
      </PageTemplate>
    </>
  );
};

export default Post;
