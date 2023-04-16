import {Route, BrowserRouter, Switch} from "react-router-dom"
import './App.css';
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/FormPage/Form";
import Landing from "./components/LandingPage/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home}/>
          <Route path="/home/:id" component={Detail}/>
          <Route path="/form" component={Form}/>
          <Route path="/landing" component={Landing}/>
        </Switch>
      <h1>Henry Countries: By Juan Martin </h1>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
