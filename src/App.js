import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import LikeButton from './pages/likeButton';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='likeButton' element={<LikeButton></LikeButton>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
