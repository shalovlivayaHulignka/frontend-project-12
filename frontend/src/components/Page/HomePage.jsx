import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../utils/routes.jsx';
import useAuth from "../../hooks/useAuth.jsx";
import ContainerChat from '../Chat/ContainerChat.jsx';

export const HomePage = () => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate(routes.loginPagePath());
    }
  }, []);
  return (
    <ContainerChat />
  );
};
