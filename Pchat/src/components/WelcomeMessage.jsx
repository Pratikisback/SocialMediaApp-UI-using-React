const WelcomeMessage = ({ onGetPosts }) => {
  return (
    <center className="welcome">
      <h1>There are no posts to be shown</h1>
      <button type="button" onClick={onGetPosts} className="btn btn-primary">
        Get posts from server
      </button>
    </center>
  );
};

export default WelcomeMessage;
