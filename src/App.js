import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Home from "./components/Home";
import Doctors from './components/Doctors'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/doctors" component={Doctors} />
  </Switch>
);
export default App;
