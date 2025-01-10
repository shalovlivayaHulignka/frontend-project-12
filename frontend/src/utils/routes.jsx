const apiPath = "/api/v1";

const routes =  {
  mainPagePath: () => "/",
  loginPagePath: () => "/login",
  signUpPagePath: () => "/signup",
  loginApiPath: () => [apiPath, "login"].join("/"),
  signUpApiPath: () => [apiPath, "signup"].join("/"),
};

export default routes;
