import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages';
import PortfolioPages from './components/Portfolio/PortfolioPages/PortfolioPages';
import HomePages from './components/Portfolio/Home/HomePages';
import ServicePages from './components/Portfolio/ServicePages/ServicePages';
import AboutPages from './components/Portfolio/AboutPages/AboutPages';
import BlogPage from './components/Portfolio/BlogPage/BlogPage';
import ContactPages from './components/Portfolio/ContactPages/ContactPages';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="portfolio" element={<PortfolioPages />} />
          <Route path="/" element={<HomePages />} />
          <Route path="service" element={<ServicePages />} />
          <Route path="About" element={<AboutPages />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
