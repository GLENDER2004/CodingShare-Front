import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registrar from "./components/Registrar";
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
      </Routes>
    </Router>
  );
}

export default App;
