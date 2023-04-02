import { Route, Switch } from 'react-router-dom';
import './App.css';
import Page404 from './PageComponents/404Page';
import BorderPage from './PageComponents/BorderPage';
import CardPage from './PageComponents/CardPage';
import Colors from './PageComponents/Colors';
import LoginPage from './PageComponents/LoginPage';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/">
            <CardPage/>
        </Route>
        <Route path="/border">
          <BorderPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/color">
          <Colors/>
        </Route>
        <Route path="**">
          <Page404/>
        </Route>
       </Switch>
    </div>
  );
}

export default App;
