import {BrowserRouter, Route,Switch,Link,NavLink}from 'react-router-dom'
import React,{useState,useEffect} from 'react'
import Nav from './components/nav';
import vdo from './components/vdo';
import Home from './components/home';
import Pagination from './components/pagination';
import Axios from 'axios';
import Post_id from './components/post_id'
import './App.css';
import Post from './components/post'
function App() {
  
  return (
<BrowserRouter>
<div>
    <Nav></Nav>
    
    <Switch>
     {/* <Route exact path="/page/:id"  children={<Home />}></Route> */}
     <Route exact path="/" components={Post} />

     </Switch>
    
    <Pagination />
    </div>
    </BrowserRouter>
 
  );
}

export default App;
