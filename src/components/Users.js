import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
    }
  }
`;

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  console.log('Loading:', loading);
  console.log('Error:', error);
  console.log('Data:', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
