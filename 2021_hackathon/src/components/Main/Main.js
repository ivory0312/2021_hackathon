import PageTemplate from "../Common/PageTemplate/PageTemplate";
import useFetchPost from "../../hooks/useFetchPost";

const Main = () => {
  const { data, onclick } = useFetchPost();

  console.log(data);
  return (
    <PageTemplate>
      {data?.data.map((item) => (
        <div onClick={() => onclick(item.id)} key={item.id}>
          {item.title}
        </div>
      ))}
    </PageTemplate>
  );
};

export default Main;
