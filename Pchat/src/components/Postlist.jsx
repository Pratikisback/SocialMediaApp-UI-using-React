import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostListProvider";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("fetching started");
    let data = { get_posts: true };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://127.0.0.1:5000/user/get-posts", options, { signal })
      .then((res) => res.json())
      .then((dataa) => {
        addInitialPosts(dataa.posts);
        console.log("fetch returned");
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
    };
  }, []);

  const handleGetPosts = () => {};
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage onGetPosts={handleGetPosts} />
      )}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default Postlist;
