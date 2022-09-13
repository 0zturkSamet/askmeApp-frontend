import React, { useEffect, useState } from "react";

const Post = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("/posts").then(
      (result) => {
        setIsLoaded(true);
        setPostList(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);
  if (error) {
    return <div>Ta daaa ERRORRRR...</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {postList.map((post) => (
          <li>
            {post.title} {post.text}
          </li>
        ))}
      </ul>
    );
  }
};

export default Post;
