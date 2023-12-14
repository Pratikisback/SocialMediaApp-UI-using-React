import { createContext, useContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        userId: userId,
        reactions: reactions,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends, I am in Matheran",
    userId: "user-9",
    reactions: 2,
    tags: ["vacations", "wanderlust"],
  },
  {
    id: "2",
    title: "Exploring New York City",
    body: "Hey everyone, I'm currently exploring the vibrant streets of New York City!",
    userId: "user-15",
    reactions: 5,
    tags: ["adventure", "citylife"],
  },

  {
    id: "3",
    title: "Discovering Parisian Charm",
    body: "Bonjour! I'm discovering the enchanting streets of Paris, filled with history and romance.",
    userId: "user-7",
    reactions: 8,
    tags: ["travel", "culture"],
  },
  {
    id: "4",
    title: "Hiking in the Swiss Alps",
    body: "Greetings from the breathtaking Swiss Alps! Today's adventure includes hiking amidst stunning mountain landscapes.",
    userId: "user-22",
    reactions: 12,
    tags: ["nature", "hiking"],
  },
  {
    id: "5",
    title: "Sunny Days in Santorini",
    body: "Kalimera! Enjoying sunny days in Santorini, surrounded by azure waters and whitewashed architecture.",
    userId: "user-11",
    reactions: 15,
    tags: ["islandlife", "beauty"],
  },
  {
    id: "6",
    title: "Adventures in Kyoto",
    body: "Konnichiwa! Exploring the historic city of Kyoto, home to beautiful temples and traditional tea houses.",
    userId: "user-18",
    reactions: 10,
    tags: ["history", "adventure"],
  },
  {
    id: "7",
    title: "Diving in the Great Barrier Reef",
    body: "G'day mates! Today's adventure takes me underwater exploring the wonders of the Great Barrier Reef.",
    userId: "user-14",
    reactions: 7,
    tags: ["ocean", "diving"],
  },
  {
    id: "8",
    title: "Cruising the Amalfi Coast",
    body: "Ciao! Cruising along the stunning Amalfi Coast, enjoying breathtaking views of the Mediterranean Sea.",
    userId: "user-25",
    reactions: 9,
    tags: ["coastal", "travel"],
  },
  {
    id: "9",
    title: "Snowy Adventures in Aspen",
    body: "Hello from Aspen! Embracing winter with snow-covered landscapes and thrilling skiing adventures.",
    userId: "user-19",
    reactions: 11,
    tags: ["winter", "skiing"],
  },
  {
    id: "10",
    title: "Sunsets in Bali",
    body: "Selamat sore! Relaxing and enjoying mesmerizing sunsets on the beautiful beaches of Bali.",
    userId: "user-30",
    reactions: 14,
    tags: ["paradise", "sunset"],
  },
  {
    id: "11",
    title: "Safari in Serengeti",
    body: "Jambo! Experiencing the thrill of a safari in the Serengeti, surrounded by wildlife and vast landscapes.",
    userId: "user-9",
    reactions: 18,
    tags: ["safari", "wildlife"],
  },
  {
    id: "12",
    title: "Cultural Delights in Rome",
    body: "Ciao a tutti! Immersing myself in the rich culture of Rome, exploring historic landmarks and savoring delicious cuisine.",
    userId: "user-17",
    reactions: 13,
    tags: ["culture", "history"],
  },
];

export default PostListProvider;
