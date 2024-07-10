import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './index.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
