import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Недопустимый формат почты').required('Это обязательное поле'),
  password: Yup.string().min(8, 'Введите не менее 8-ми символов').required('Это обязательное поле'),
  name: Yup.string().min(2, 'Введите не менее 2-х символов').required('Это обязательное поле'),
});

const FormSignUp = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ isValid }) => (
        <Form className="form">
          <label className="form__label auth-page__colored-text" htmlFor="email">Email</label>
          <Field name="email">
            {({ field, meta }) => (
              <div className="form__field">
                <input type="email" {...field} className="form__input" placeholder="Введите Email" />
                {meta.touched &&
                  meta.error && <div className="form__error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <label className="form__label auth-page__colored-text" htmlFor="password">Пароль</label>
          <Field name="password">
            {({ field, meta }) => (
              <div className="form__field">
                <input {...field} className="form__input" placeholder="Введите пароль" />
                {meta.touched &&
                  meta.error && <div className="form__error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <label className="form__label auth-page__colored-text" htmlFor="name">Имя</label>
          <Field name="name">
            {({ field, meta }) => (
              <div className="form__field">
                <input {...field} className="form__input" placeholder="Введите имя" />
                {meta.touched &&
                  meta.error && <div className="form__error">{meta.error}</div>}
              </div>
            )}
          </Field>
          <button
            type="submit"
            className={isValid ? "form__button form__button_activ" : "form__button"}
          >Войти</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormSignUp;
