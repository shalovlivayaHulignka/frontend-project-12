import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
    if (!token) {
      navigate('/login');
    }
  }, );
  return (
    <h1> Hello! </h1>
  );
};


