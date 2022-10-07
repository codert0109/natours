import { Route, Switch } from 'react-router-dom';
import ErrorPage from '../errors/errorPage.component';
import Login from '../login/login.component';
import Signup from '../signup/signup.component';
import AllTours from '../tour/allTours.component';
import SingleTour from '../tour/singleTour.component';

const LoginSignup = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <AllTours />
      </Route>
      <Route path='/tour/:tour' component={SingleTour} />
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='*'>
        <ErrorPage message='404 Page not found' />
      </Route>
    </Switch>
  );
};

export default LoginSignup;
