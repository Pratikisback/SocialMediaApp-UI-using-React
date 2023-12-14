import { useContext, useRef } from "react";
import { PostList } from "../store/PostListProvider";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const hashtagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = titleElement.current.value;
    const postBody = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = hashtagsElement.current.value.split(/\s+/);

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    hashtagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <div>
      <form className="createpost" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User id
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your user id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title{" "}
          </label>
          <input
            type="text"
            ref={titleElement}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="How is it going?"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="body" className="form-label">
            Post Content{" "}
          </label>
          <textarea
            rows="100"
            ref={bodyElement}
            type="text"
            className="form-control body"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Enter your reaction{" "}
          </label>
          <input
            ref={reactionsElement}
            type="number"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted on this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">
            Enter Your hashtags here{" "}
          </label>
          <input
            ref={hashtagsElement}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="hashtags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
