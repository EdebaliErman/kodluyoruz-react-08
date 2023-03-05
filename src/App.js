
import './App.css';

import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import Error404 from './components/Error404';
{/* Yukarıdaki Hookları tanımlamayı unutmayın !*/ }
function App({ activeStyle, isActive }) {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink 
              to="/" 
              className={({ isActive }) =>
              isActive ? "activeClassName" : undefined
            }>
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) =>
              isActive ? "activeClassName" : undefined
            }>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) =>
              isActive ? "activeClassName" : undefined
            } >Users</NavLink>
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
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
  );
}





export default App;
