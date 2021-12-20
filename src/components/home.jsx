import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = props => {
  const navigation = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => { navigation('/profile'); }}>Go to Profile</button>
    </>
  )
};

export default Home;