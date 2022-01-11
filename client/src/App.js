import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import NavBar from './components/NavBar/NavBar';
import './common/styles/index.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}></Route>
          <Route exact path="/login" component={Auth(LoginPage, false)}></Route>
          <Route exact path="/register" component={Auth(RegisterPage, false)}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
