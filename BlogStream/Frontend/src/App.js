import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/write' element={<CreatePost/>} />
        <Route exact path='/posts/post/:id' element={<PostDetails/>} />
        <Route exact path='/edit/:id' element={<EditPost/>} />
        <Route exact path='/profile/:id' element={<Profile/>} />
        <Route exact path='/blogs' element={<Blogs/>} />
        <Route exact path='/aboutus' element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;