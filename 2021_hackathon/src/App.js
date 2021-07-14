import Main from "./components/Main/Main";
import Post from "./components/Post/Post";
import Login from "./components/Login/Login";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/post/detail/:idx" component={Post} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
