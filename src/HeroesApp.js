import React, { useEffect, useReducer } from 'react'
import { authContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import AppRouter from './routes/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  return (
    <authContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </authContext.Provider>
  )
}

export default HeroesApp;
