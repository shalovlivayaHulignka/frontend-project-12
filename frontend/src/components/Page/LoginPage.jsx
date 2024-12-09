import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import image from '../../assets/login.jpg';
import routes from '../../utils/routes';
import LoginForm from '../LoginForm.jsx';

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={image} className="rounded-circle" alt="login" width={200}/>
              </div>
             <LoginForm />
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>{t("loginPage.question")}</span>
                <Link to={routes.signUpPagePath()}>
                  {t("loginPage.registration")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
