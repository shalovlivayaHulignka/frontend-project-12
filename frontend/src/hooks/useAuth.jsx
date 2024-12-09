import { useContext } from 'react';

import authContext from '..//authorization/AuthContext';

const useAuth = () => useContext(authContext);

export default useAuth;