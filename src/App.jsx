import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Landing_page from './components/Landing_page';
import SiginUp from './components/SiginUp';
import Login from './components/Login';

function App() {
 

  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Landing_page/>}/>
  </Route>
  <Route path='/signUp' element={<SiginUp/>}/>
  <Route path='/login' element={<Login/>}/>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
