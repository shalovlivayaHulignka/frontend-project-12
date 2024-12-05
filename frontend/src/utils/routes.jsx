const apiPath = '/api/v1';

const routes =  {
  mainPagePath: () => '/',
  loginPagePath: () => '/login',
  signUpPagePath: () => '/signup',
  loginApiPath: () => [apiPath, 'login'].join('/'),
};

export default routes;
