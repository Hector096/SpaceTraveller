import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { getMissionsAction } from '../redux/missions';
import getMissionsFromApi from '../redux/api';
import Missions from './Missions';
import Rockets from './Rockets';
import Profile from './Profile';
import Header from './Header';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getMissionsFromApi()
      .then((data) => {
        dispatch(getMissionsAction(data));
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div className="bg-light app-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Rockets} />
        <Route exact path="/missions" component={Missions} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
