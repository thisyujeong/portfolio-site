import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import NavBar from './components/NavBar';
import './common/styles/index.scss';
import Admin from './pages/Admin/Admin';
import Write from './pages/Admin/Write/Write';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Footer from './components/Footer';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from './context/themeProvider';
import { theme } from './theme/theme';

function App(props) {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <div className="contents">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Auth(LandingPage, null)}></Route>
              <Route exact path="/login" component={Auth(Login, false)}></Route>
              <Route exact path="/register" component={Auth(RegisterPage, false)}></Route>
              <>
                <div className="page-admin">
                  <div className="container">
                    <Route exact path="/admin" component={Auth(Admin, true)}></Route>
                    <Route
                      exact
                      path="/admin/write"
                      component={Auth(Write, true)}
                    ></Route>
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
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
