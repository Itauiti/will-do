import React, { useState } from 'react';

function FormSignUp() {
  const [form, setForm] = useState({
    email: '', password: ''
  })

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const loading = false; //вручную, для отработки + чтобы не забыть добавить потом
  return (
    <form className="form" name="signup" novalidate>
      <div className="form__field">
        <label for="email-signup" className="form__label"><span className="popup__colored-text">Email</span></label>
        <input
          className="form__input form__input_type_email"
          type="email"
          id="email-signup"
          name="email"
          placeholder="Введите Email"
          pattern="(?!.*--)(([a-zA-Z0-9]{1,2})|([a-zA-Z0-9][\w-]+[a-zA-Z0-9]))@([\w-]+\.)+[a-zA-z]+"
          required
          onChange={changeHandler}
          disabled={loading}
        />
        <span id="email-signup-error" className="form__error">Неправильный формат email</span>
      </div>
      <div class="form__field">
        <label for="password" className="form__label"><span className="auth-page__colored-text">Пароль</span></label>
        <input
          className="form__input form__input_type_password"
          type="password"
          id="password-signup"
          name="password"
          placeholder="Введите пароль"
          minlength="8"
          pattern=".[^\s]{7,}"
          required
          onChange={changeHandler}
          disabled={loading}
        />
        <span id="password-signup-error" className="form__error">Введите не менее 8 символов (без пробелов)</span>
      </div>
      <div className="form__field">
        <label for="name" className="form__label"><span className="auth-page__colored-text">Имя</span></label>
        <input
          className="form__input form__input_type_name"
          type="text"
          id="name"
          name="name"
          placeholder="Введите своё имя"
          minlength="2"
          maxlength="30"
          required
          onChange={changeHandler}
          disabled={loading}
        />
        <span id="name-error" class="form__error">Введите не менее 2 символов</span>
      </div>
      <div className="form__field">
        <span id="auth-error" className="form__error form__error_centre">Такой пользователь уже есть</span>
        <button type="submit" name="button" className="form__button" disabled={loading}>Зарегистрироваться</button>
      </div>
    </form>
  )
}

export default FormSignUp;