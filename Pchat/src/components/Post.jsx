import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/PostListProvider";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card postt" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>

        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span className="badge text-bg-primary hashtag" key={index}>
            {tag}
          </span>
        ))}
        <div
          className="alert alert-success reactions"
          style={{ marginBottom: "5px" }}
          role="alert"
        >
          This post has been reacted by {post.reactions} people{" "}
        </div>
      </div>
    </div>
  );
};

export default Post;
