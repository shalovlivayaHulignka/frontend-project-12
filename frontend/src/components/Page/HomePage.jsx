import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContainerChat from '../Chat/ContainerChat.jsx';

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, );
  return (
    <ContainerChat />
  );
};


