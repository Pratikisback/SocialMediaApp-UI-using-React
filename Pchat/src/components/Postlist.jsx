import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostListProvider";

const Postlist = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default Postlist;