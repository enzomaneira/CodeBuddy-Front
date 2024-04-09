import React, { createContext, useContext, useState } from "react";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return { posts, addPost, setPosts };
};


export default PostsProvider;
