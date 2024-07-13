import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './index.css';
import AllRecipes from './Components/AllRecipes';
import MainPost from './Components/MainPost';
import MyAccount from './Components/MyAccount';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/allRecipes' element={<AllRecipes />} />
          <Route exact path='/recipe' element={<MainPost />} />
          <Route exact path='/me' element={<MyAccount />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
