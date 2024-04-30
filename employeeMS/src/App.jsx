import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<Login />} ></Route>
        <Route path="/dashboard" element={<Dashboard />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
