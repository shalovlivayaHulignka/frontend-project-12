import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import routes from './utils/routes';
import HomePage from './components/Page/HomePage';
import LoginPage from './components/Page/LoginPage';
import SignUpPage from './components/Page/SignUpPage';
import NotFoundPage from './components/Page/NotFoundPage';
import AuthProvider from './authorization/AuthProvider';
import Navigation from './components/Navigation';
import store from './store/store';

const App = () => (
  <div className="d-flex flex-column h-100">
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="light"
        transition={Flip}
      />
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

export default App;
