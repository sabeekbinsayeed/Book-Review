import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Reviews from './components/Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Review from './components/Review/Review';
import Dashboard from './components/DashBoard/DashBoard';



function App() {
  return (
    <div >
      <Header></Header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />


      </Routes>
    </div>
  );
}

export default App;
