import { useEffect, useState } from "react"
import styled from "styled-components";

const Users = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <StyledList>
      <Title>Users!</Title>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </StyledList>
  )
}

export default Users;

const StyledList = styled.ul`
  padding: 0 50px
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 10px;
`;