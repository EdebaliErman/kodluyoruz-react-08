
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
{/* Yukarıdaki Hookları tanımlamayı unutmayın !*/ }
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
      {/* Evet arkadaşlar Routlarımızı tanımlıyoruz*/}
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users/*' element={<Users />} /> {/*Burada tanımladığımız path='/users/*' dikat edelim !
          Çünkü buradan usersın altındaki elemanlara ulaşıcağız ardından Users.js  gidelim */}
      </Routes>
    </Router>
  );
}





export default App;
