import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostListProvider";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = () => {
  const { postList, fetching } = useContext(PostListData);

  const handleGetPosts = () => {};
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage onGetPosts={handleGetPosts} />
      )}
      {!fetching &&
        postList.map((post) => <Post key={post.title} post={post}></Post>)}
    </>
  );
};

export default Postlist;
