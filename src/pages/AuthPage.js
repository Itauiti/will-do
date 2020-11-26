import React from 'react';
import { Switch, Route, Link, useRouteMatch, Redirect } from 'react-router-dom';
import FormSignIn from '../components/FormSignIn.js';
import FormSignUp from '../components/FormSignUp.js';

function AuthPage() {
  const { path, url } = useRouteMatch();

  return (
    <div className="auth-page">
      <Redirect to={`${path}/signin`} />
      <Switch>
        <Route path={`${path}/signin`}>
          <h3 className="auth-page__title">Вход</h3>
          <FormSignIn />
          <p className="auth-page__text">или
            <Link to={`${url}/signup`} className="auth-page__link auth-page__colored-text"> Зарегистрироваться</Link>
          </p>
        </Route>
        <Route path={`${path}/signup`}>
          <h3 className="auth-page__title">Регистрация</h3>
          <FormSignUp />
          <p className="auth-page__text">или
            <Link to={`${url}/signin`} className="auth-page__link auth-page__colored-text"> Войти</Link>
          </p>
        </Route>
      </Switch>
    </div>
  )
}

export default AuthPage;