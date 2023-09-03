import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddProduct from './components/AddPruduct';
import EditProduct from './components/EditProduct';
import Contact from './components/Contact';

function App() {
  return (
    <>
   <h1 className='text-center p-2 bg-warning'>Product Management System</h1>
   <Navbar/>
<Routes>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/addproduct" element={<AddProduct/>}></Route>
  <Route path="/editproduct/:id" element={<EditProduct/>}></Route>
  <Route path="/contactus" element={<Contact/>}></Route>
</Routes>

   </>
  );
}

export default App;
