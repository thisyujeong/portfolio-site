import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Auth from './hoc/auth';
import NavBar from './components/NavBar';
import './common/styles/index.scss';
import AdminProjects from './pages/AdminProjects';
import Login from './pages/Login';
import Footer from './components/Footer';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from './context/themeProvider';
import { theme } from './theme/theme';
import ProjectWrite from './pages/ProjectWrite';
import ProjectEdit from './pages/ProjectEdit';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

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
              <Route exact path="/about" component={Auth(About, null)}></Route>
              <Route
                exact
                path="/projects/:id"
                component={Auth(ProjectDetail, null)}
              ></Route>
              <Route
                exact
                path="/admin/projects"
                component={Auth(AdminProjects, true)}
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
