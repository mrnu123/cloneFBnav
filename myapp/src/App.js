import {BrowserRouter, Route,Switch,Link,NavLink}from 'react-router-dom'
import React,{useState,useEffect} from 'react'
import Nav from './components/nav';
import vdo from './components/vdo';
import Home from './components/home';
import Pagination from './components/pagination';
import Axios from 'axios';
import Post_id from './components/post_id'
import './App.css';
function App() {
  
  return (
<BrowserRouter>
    <Nav></Nav>
    <div>
    </div>
    <Pagination />
    </BrowserRouter>
 
  );
}

export default App;
