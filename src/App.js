import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar';
import Footer  from './Components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';


function App() {
  return (
   <>
   <Router>   
   <NaviBar/>
   <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<About />} />
   </Routes>
   </Router>
   <Footer />
   </>   
  );
}

export default App;
