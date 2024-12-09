import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from "./utils/routes.jsx";
import { HomePage } from './components/Page/HomePage.jsx';
import { LoginPage } from './components/Page/LoginPage.jsx';
import { SignUpPage } from './components/Page/SignUpPage.jsx';
import { NotFoundPage } from './components/Page/NotFoundPage.jsx';
import AuthProvider from "./auth/AuthProvider.jsx";
import Navigation from "./components/Navigation.jsx";
import store from "./store/store.jsx";

const App = ()  => {
  return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <Navigation />
            <Routes>
              <Route path={routes.mainPagePath()} element={<HomePage />} />
              <Route path={routes.loginPagePath()} element={<LoginPage />} />
              <Route path={routes.signUpPagePath()} element={<SignUpPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
