import React, { useState } from 'react';

function FormSignIn() {
  const [ form, setForm ] = useState({
    email: '', password: ''
  })

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loading = false; //вручную, для отработки + чтобы не забыть добавить потом

  return (
    <form className="form" name="login" novalidate>
      <div className="form__field">
        <label for="email-login" className="form__label"><span className="auth-page__colored-text">Email</span></label>
        <input
          className="form__input form__input_type_email"
          type="email"
          id="email-login"
          name="email"
          placeholder="Введите Email"
          required
          pattern="(?!.*--)(([a-zA-Z0-9]{1,2})|([a-zA-Z0-9][\w-]+[a-zA-Z0-9]))@([\w-]+\.)+[a-zA-z]+"
          onChange = {changeHandler}
          disabled = {loading}
        />
        <span id="email-login-error" className="form__error">Неправильный формат email</span>
      </div>
      <div className="form__field">
        <label for="password" className="form__label"><span className="auth-page__colored-text">Пароль</span></label>
        <input
          className="form__input form__input_type_password"
          type="password"
          id="password-login"
          name="password"
          placeholder="Введите пароль"
          required
          minlength="8"
          pattern=".[^\s]{7,}"
          onChange = {changeHandler}
          disabled = {loading}
        />
        <span id="password-login-error" className="form__error">Введите не менее 8 символов (без пробелов)</span>
      </div>
      <div className="form__field">
        <span id="auth-error" className="form__error form__error_centre">Неверные логин или пароль</span>
        <button type="submit" name="button" className="form__button form__button_login" disabled={loading}>Войти</button>
      </div>
    </form>
  )
}

export default FormSignIn;