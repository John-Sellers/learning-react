import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
