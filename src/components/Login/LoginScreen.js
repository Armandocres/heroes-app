import React, { useContext } from 'react';
import { authContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {

  const { dispatch } = useContext(authContext);

  const lastPath = localStorage.getItem('lastPath') || '/'

  const handleClick = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'Armando'
      }
    })
    history.replace(lastPath);
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen;
