import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const LoginPage = () => {
  return (
    <div className="col-12 col-md-8 col-xxl-6">
      <div className="card shadow-sm">
        <div className="card-body row p-5">
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              console.log("Отправленные данные:", values);
            }}
          >
            <Form className="col-12 col-md-6 mt-3 mt-md-0">
              <h1 className="text-center mb-4">Войти</h1>
              <div className="form-floating mb-3">
                <label htmlFor="username">Ваш ник:</label>
                <Field
                  type="text"
                  id="username"
                  placeholder="Ваш ник"
                  name="username"
                  className="form-control"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-floating mb-4">
                <label htmlFor="password" className="form-label">
                  Пароль:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>
              <button
                type="submit"
                className="w-100 mb-3 btn btn-outline-primary"
              >
                Войти
              </button>
            </Form>
          </Formik>
          <Link to="/">На главную</Link>
        </div>
      </div>
    </div>
  );
};
