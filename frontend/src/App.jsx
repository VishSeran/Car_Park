import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateCar from './pages/CreateCar';
import ShowCar from './pages/ShowCar';
import EditCar from './pages/EditCar';
import DeleteCar from './pages/DeleteCar';
import SignUpPage from './pages/SignUpPage';
import Login from './pages/Login';
import HomePage from './pages/HomePage';




const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cars/create' element={<CreateCar />} />
      <Route path='/cars/details/:id' element={<ShowCar/>} />
      <Route path='/cars/edit/:id' element={<EditCar />} />
      <Route path='/cars/delete/:id' element={<DeleteCar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  )
}

export default App