import React, { Component } from 'react'
import './App.css';
import Home from './Account/Home';
import Aboutus from './Account/Aboutus';
import Contactus from './Account/Contactus';
import Login from './Account/Login';
import Pagenotfound from './Account/Pagenotfound';
import Showemployee from './Empinfo/Showemployee';
import Editemployee from './Empinfo/Editemployee';

import {BrowserRouter,Routes,Route,Link}  from 'react-router-dom';
import Userinfo from './Empinfo/Userinfo';
import ShowAllbooks from './BooksDetails/ShowAllbooks';

export default class App2 extends Component {
  render() {
    return (
        <><h1>this is main page</h1>
        <BrowserRouter>
            <div className='App'>App2</div>
            <ul>
                <li>
                    <Link to="/">Home</Link>  </li>
                    <li>
                    <Link to="/Aboutus">About</Link></li>
                   <li> <Link to="/Contactus">ContactUs</Link></li>
                <li>    <Link to="/Login">Login</Link></li>
                <li>    <Link to="/Showemployee">Showemployee</Link></li>
                <li>    <Link to="/Editemployee">Editemployee</Link></li>
                <li>    <Link to="/Userinfo">Userinfo</Link></li>
                <li>    <Link to="/ShowAllbooks">ShowAllbooks</Link></li>


                
              
            </ul>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Aboutus' element={<Aboutus />}></Route>
                <Route path='/Contactus' element={<Contactus />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='*' element={<Pagenotfound />}></Route>
                <Route path='/Showemployee' element={<Showemployee />}></Route>
                <Route path='/Editemployee' element={<Editemployee />}></Route>
                <Route path='/Userinfo' element={<Userinfo />}></Route>
                <Route path='/ShowAllbooks' element={<ShowAllbooks />}></Route>

            </Routes>
        </BrowserRouter></>
    )
  }
}
