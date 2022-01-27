import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Auth from './hoc/auth';
import NavBar from './components/NavBar';
import './common/styles/index.scss';
import Admin from './pages/Admin/Admin';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Footer from './components/Footer';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from './context/themeProvider';
import { theme } from './theme/theme';
import ProjectWrite from './pages/ProjectWrite';
import ProjectEdit from './pages/ProjectEdit';

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
              <Route exact path="/admin" component={Auth(Admin, true)}></Route>
              <Route
                exact
                path="/admin/projects"
                component={Auth(Projects, true)}
              ></Route>
              <Route
                exact
                path="/admin/write"
                component={Auth(ProjectWrite, true)}
              ></Route>
              <Route
                exact
                path="/admin/edit/:id"
                component={Auth(ProjectEdit, true)}
              ></Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
