import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Landing_page from './components/Landing_page';
import SiginUp from './components/SiginUp';
import Login from './components/Login';
import DashboardLayout from './dashboard/pages/DashboardLayout';
import Dashboard from './dashboard/pages/Dashboard';
import AddBlogs from './dashboard/pages/AddBlogs';
import User from './dashboard/pages/User';
import Comments from './dashboard/pages/Comments';

function App() {
 

  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Landing_page/>}/>
  <Route path='/landing' element={<Landing_page/>}/>
  </Route>
  <Route path='/signUp' element={<SiginUp/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/'element={<DashboardLayout/>}>
  <Route index element={<Dashboard/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/addblog' element={<AddBlogs/>}/>
  <Route path='/user' element={<User/>}/>
  <Route path='/comment' element={<Comments/>}/>
  </Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
