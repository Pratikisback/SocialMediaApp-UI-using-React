import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostListProvider";
import WelcomeMessage from "./WelcomeMessage";

const Postlist = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPosts = () => {
    let data = { get_posts: true };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://127.0.0.1:5000/user/get-posts", options)
      .then((res) => res.json())
      .then((dataa) => {
        addInitialPosts(dataa.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && <WelcomeMessage onGetPosts={handleGetPosts} />}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default Postlist;
