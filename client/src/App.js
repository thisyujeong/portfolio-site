import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import NavBar from './components/NavBar/NavBar';
import './common/styles/index.scss';
import Admin from './pages/Admin/Admin';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { auth } from './_actions/user_action';

function App(props) {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    dispatch(auth()).then((response) => {
      if (response.payload.isAuth) {
        console.log(`isAuth: ${response.payload.isAuth}`);
        setIsLogin(true);
      } else {
        console.log(`You're not logged in.`);
        setIsLogin(false);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <NavBar isLogin={isLogin} />
      <div className="contents">
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}></Route>
          <Route exact path="/login" component={Auth(LoginPage, false)}></Route>
          <Route exact path="/register" component={Auth(RegisterPage, false)}></Route>
          <Route exact path="/admin" component={Auth(Admin, false)}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
