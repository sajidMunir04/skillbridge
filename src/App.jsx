import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Courses from './components/pages/Courses';
import Contact from './components/pages/Contact';
import Pricing from './components/pages/Pricing';

function App()
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/courses" element={<Courses/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/pricing" element={<Pricing/>} />
            </Routes>
        </Router>
      );
}

export default App;