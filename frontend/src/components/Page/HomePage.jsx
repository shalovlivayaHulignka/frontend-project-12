import useAuth from "../../hooks/useAuth.jsx";
import ContainerChat from '../Chat/ContainerChat.jsx';
import LoginPage from './LoginPage.jsx';

export const HomePage = () => {
  const { loggedIn } = useAuth();
  return loggedIn ? <ContainerChat /> : <LoginPage />;
};


