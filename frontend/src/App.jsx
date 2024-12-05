import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from "./utils/routes.jsx";
import { HomePage } from './components/Page/HomePage.jsx';
import { LoginPage } from './components/Page/LoginPage.jsx';
import { SignUpPage } from './components/Page/SignUpPage.jsx';
import { NotFoundPage } from './components/Page/NotFoundPage.jsx';

console.log()

const App = ()  => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.mainPagePath()} element={<HomePage />} />
        <Route path={routes.loginPagePath()} element={<LoginPage />} />
        <Route path={routes.signUpPagePath()} element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
