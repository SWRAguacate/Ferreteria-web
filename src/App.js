import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Login from "./components/pages/login";

function App() {
  return <div className="App">
      <Router>
        <Route exact path="/login" element={<Login/>} ></Route>
      </Router>
  </div>;
}

export default App;
