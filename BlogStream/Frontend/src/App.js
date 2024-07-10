import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PostDetails from './pages/PostDetails';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Profile from './pages/Profile';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Forgetpass from './pages/Forgetpass';
import Navbar from './components/Navbar';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/write' element={<CreatePost />} />
          <Route exact path='/posts/post/:id' element={<PostDetails />} />
          <Route exact path='/edit/:id' element={<EditPost />} />
          <Route exact path='/profile/:id' element={<Profile />} />
          <Route exact path='/blogs' element={<Blogs />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/contactus' element={<ContactUs />} />
          <Route exact path='/forgetpassword' element={<Forgetpass />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
