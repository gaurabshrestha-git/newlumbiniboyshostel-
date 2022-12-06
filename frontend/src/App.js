import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
