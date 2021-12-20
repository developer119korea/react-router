import React from 'react';
import { useNavigate } from 'react-router-dom';


const Profile = props => {
  const navigation = useNavigate();
  return (
    <>
      <h1>Profile</h1>
      <button onClick={() => { navigation('/home'); }}>Go to Home</button>
    </>
  )
};

export default Profile;