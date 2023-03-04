
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />

      </Routes>
    </Router>
  );
}





export default App;
