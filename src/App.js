import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
