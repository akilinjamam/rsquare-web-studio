import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
