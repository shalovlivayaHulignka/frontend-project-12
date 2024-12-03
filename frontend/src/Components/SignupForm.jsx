import { useFormik } from "formik";
import './SignupForm.css';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="form-caption">Войти</h1>
      <div className="form-group">
        <label htmlFor="name">Ваш ник</label>
        <input
          className="form-input"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Пароль</label>
        <input
          className="form-input"
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div className="form-group">
        <button className="form-button" type="submit">Войти</button>
      </div>
    </form>
  );
};

export default SignupForm;