import React from "react";
import { Routes, Route } from "react-router";

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AdPage from './pages/AdPage'

export default ()=>{
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/signin' element={<SignIn/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/ad/:id' element={<AdPage/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
    )
}