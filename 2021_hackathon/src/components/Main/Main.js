import React, { useState } from "react";
import PageTemplate from "../Common/PageTemplate/PageTemplate";
import PostList from "../Post/PostList/PostList";

const Main = () => {
  return (
    <PageTemplate>
      <PostList />
    </PageTemplate>
  );
};

export default Main;
