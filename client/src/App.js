import './App.css';
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/FormPage/Form";
import Landing from "./components/LandingPage/Landing";

function App() {
  return (
    <div className="App">
      <Home/>
      <Detail/>
      <Form/>
      <Landing/>

      <h1>Henry Countries: By Juan Martin </h1>
    </div>
  );
}

export default App;
