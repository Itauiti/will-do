import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage.js';
import UsersPage from './pages/UsersPage';
import AuthPage from './pages/AuthPage.js';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/users_page">
        <UsersPage />
      </Route>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}