import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Pricing from './Components/Pricing/Pricing';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
