import { Redirect, Route, Switch } from 'react-router-dom';
import AllTours from '../tour/allTours.component';
import BookedTours from '../tour/bookedTours.component';
import SingleTour from '../tour/singleTour.component';
import UserProfile from '../userProfile/userProfile.component';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <AllTours />
      </Route>
      <Route exact path='/my-tours'>
        <BookedTours />
      </Route>
      <Route path='/me'>
        <UserProfile />
      </Route>
      <Route path='/tour/:tour' component={SingleTour} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Main;
