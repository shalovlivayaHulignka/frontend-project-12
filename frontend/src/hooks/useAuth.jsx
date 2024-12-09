import { useContext } from 'react';
import authContext from '..//authorization/AuthContext';

const useAuth = () => useContext(authContext);
console.log('test: ', useAuth);

export default useAuth;