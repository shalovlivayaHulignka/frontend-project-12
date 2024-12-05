import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState, useContext, createContext } from 'react';
import image from '../../assets/login.jpg';
import routes from '../../utils/routes';

const useAuth = () => useContext(createContext({}));

export const LoginPage = () => {
  const auth = useAuth();
  const [authFailed, setAuthFailed] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: async (values) => {
      setAuthFailed(false);

      try {
        const res = await axios.post(routes.loginApiPath(), values);
        localStorage.setItem('token', JSON.stringify(res.data));
        auth.logIn();
        navigate(routes.mainPagePath());
      } catch (err) {
        formik.setSubmitting(false);
        if (err.isAxiosError && err.response.status === 401) {
          setAuthFailed(true);
          inputRef.current.select();
          return;
        }
        throw err;
      }
    },
  });

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={image} className="rounded-circle" alt="login" width={200}/>
              </div>
              <Form
                className="col-12 col-md-6 mt-3 mt-mb-0"
                onSubmit={formik.handleSubmit}
              >
                <fieldset>
                  <h1 className="text-center mb-4">Войти</h1>
                  <Form.Group className="form-floating mb-3">
                    <Form.Control
                      name="username"
                      autoComplete="username"
                      required
                      placeholder="Ваш ник"
                      id="username"
                      ref={inputRef}
                      isInvalid={authFailed}
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />
                    <Form.Label htmlFor="username">Ваш ник</Form.Label>
                  </Form.Group>
                  <Form.Group className="form-floating mb-4">
                    <Form.Control
                      name="password"
                      autoComplete="current-password"
                      required
                      placeholder="Ваш пароль"
                      type="password"
                      id="password"
                      isInvalid={authFailed}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <Form.Label htmlFor="password">Ваш пароль</Form.Label>
                    <Form.Control.Feedback type="invalid">Неправильные имя или пароль</Form.Control.Feedback>
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className="w-100 mb-3"
                  >
                    Войти
                  </Button>
                </fieldset>
              </Form>
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>Нет аккаунта? </span>
                <Link to={routes.signUpPagePath()}>Регистрация</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
