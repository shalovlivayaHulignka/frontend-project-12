import { useFormik } from "formik";
import { useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const RegistrForm = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const formik = useFormik({
    initialValues: { username: "", password: "", confirmPassword: "" },
    onSubmit: () => console.log("test"),
  });

  return (
    <Form className="w-50" onSubmit={formik.handleSubmit}>
      <fieldset>
        <h1 className="text-center mb-4">Регистрация</h1>
        <Form.Group className="form-floating mb-3">
          <Form.Control
            name="username"
            autoComplete="username"
            required
            placeholder="Ваш ник"
            id="username"
            ref={inputRef}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <Form.Label htmlFor="username">Имя пользователя</Form.Label>
        </Form.Group>
        <Form.Group className="form-floating mb-3">
          <Form.Control
            name="password"
            autoComplete="current-password"
            required
            placeholder="Ваш пароль"
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Form.Label htmlFor="password">Пароль</Form.Label>
        </Form.Group>
        <Form.Group className="form-floating mb-4">
          <Form.Control
            name="confirmPassword"
            autoComplete="new-password"
            required
            placeholder="Ваш пароль"
            type="password"
            id="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <Form.Label htmlFor="password">Подтвердите пароль</Form.Label>

          <Form.Control.Feedback type="invalid">
            Неправильные имя или пароль
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="outline-primary" className="w-100 mb-3">
          Зарегестрироваться
        </Button>
      </fieldset>
    </Form>
  );
};

export default RegistrForm;
