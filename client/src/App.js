import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import NavBar from './components/NavBar/NavBar';
import './common/styles/index.scss';
import Admin from './pages/Admin/Admin';
import Write from './pages/Admin/Write/Write';
import Projects from './pages/Admin/Projects/Projects';
import SideBar from './components/SideBar/SideBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postList } from './_actions/post_action';

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postList()).then((response) => {
      if (response.payload) {
        console.log('get posts data success:', response.payload.postsData);
      } else {
        console.log('the posts data is empty...');
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <NavBar />
      <div className="contents">
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}></Route>
          <Route exact path="/register" component={Auth(RegisterPage, false)}></Route>
          <>
            <SideBar />
            <div className="page-admin">
              <div className="container">
                <Route exact path="/admin" component={Auth(Admin, true)}></Route>
                <Route exact path="/admin/write" component={Auth(Write, true)}></Route>
                <Route
                  exact
                  path="/admin/projects"
                  component={Auth(Projects, true)}
                ></Route>
              </div>
            </div>
          </>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
