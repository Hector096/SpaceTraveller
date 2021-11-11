import { Switch, Route } from 'react-router-dom';
import Missions from './Missions';
import Rockets from './Rockets';
import Profile from './Profile';
import Header from './Header';

function App() {
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
