import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import LoginScreen from '../components/Login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import { authContext } from '../auth/AuthContext';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

  const { user } = useContext(authContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" isAuth={user.logged} component={LoginScreen} />

          <PrivateRoute path="/" isAuth={user.logged} component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );

}

export default AppRouter;
