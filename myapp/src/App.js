// import {BrowserRouter, Route,Switch,Link,NavLink}from 'react-router-dom'
// import React,{useState,useEffect} from 'react'
// import Nav from './components/nav';
// import vdo from './components/vdo';
// import Home from './components/home';
// import Pagination from './components/pagination';
// import Axios from 'axios';
// import Post_id from './components/post_id'
// import './App.css';
// import Post from './components/post'
// function App() {
  
//   return (
// <BrowserRouter>
// <div>
//     <Nav></Nav>
    
//     <Switch>
//      {/* <Route exact path="/page/:id"  children={<Home />}></Route> */}
//      <Route exact path="/" components={Post} />

//      </Switch>
    
//     <Pagination />
//     </div>
//     </BrowserRouter>
 
//   );
// }

// export default App;




import './index.css';
import {ReactComponent as PlusIcon} from './image/add_circle.svg'
import {ReactComponent as BellIcon} from './image/bell.svg'
import {ReactComponent as MsgIcon} from './image/messenger.svg'
import {ReactComponent as DropDownIcon} from './image/dropdown.svg'
import {ReactComponent as CogIcon} from './image/cog.svg'
import {ReactComponent as ChevronIcon} from './image/chevron.svg'
import {ReactComponent as CircleIcon} from './image/circle.svg'
import {ReactComponent as BackIcon} from './image/arrow.svg'
import {ReactComponent as ItemIcon} from './image/flash.svg'
import {ReactComponent as FBIcon} from './image/facebook_logo.svg'
import {ReactComponent as HomeIcon} from './image/home.svg'
import {ReactComponent as VDOIcon} from './image/ondemand_video.svg'
import {ReactComponent as MarketIcon} from './image/storefront.svg'
import {ReactComponent as CommunityIcon} from './image/groups.svg'
import {ReactComponent as GameIcon} from './image/sports_esports.svg'
// import {BrowserRouter, Route,Switch,Link,NavLink}from 'react-router-dom'
import Post_id from './components/post_id'
import './css/pagination.css';
import {BrowserRouter, Route,Switch,Link,NavLink,useParams}from 'react-router-dom'
// import Home from './home'
// import Post from './post'
import Post from './components/post'
import Home from './components/home'
import Pagination from './components/pagination'
// import{NavLink} from 'react-router'
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import vdo from './components/vdo';
import Top10 from './components/top10'
// import home from './home';
// import {ReactComponent as add_btn} from './image/add_circle.svg'
// import add_btn from './image/add_circle.svg'
function App() {
  return (
    <BrowserRouter>
    <Navbar >
    {/* <NavItemLeft iconLeft={<PlusIcon />} /> */}
    
      <Ul class_name="left">
        <Logo icon={<FBIcon />} />
      </Ul>

      <Ul class_name="center">
        <NavItem icon={<HomeIcon />} class_name="icon-center" class_li_name="nav-item-center" link="/page/1" active_class="is-active"/>
        <NavItem icon={<VDOIcon />} class_name="icon-center" class_li_name="nav-item-center" link="/vdo" active_class="is-active"/>
        <NavItem icon={<MarketIcon />} class_name="icon-center" class_li_name="nav-item-center" link="/store" active_class="is-active"/>
        <NavItem icon={<CommunityIcon />} class_name="icon-center" class_li_name="nav-item-center" link="/group" active_class="is-active"/>
        <NavItem icon={<GameIcon />} class_name="icon-center" class_li_name="nav-item-center" link="/game" active_class="is-active"/>
      </Ul>

      <Ul class_name="right">
        <NavItem icon={<PlusIcon />} class_name="icon-button" class_li_name="nav-item" link="/b" active_class="is-active-right"/>
        <NavItem icon={<MsgIcon />} class_name="icon-button" class_li_name="nav-item" link="/a" active_class="is-active-right"/>
        <NavItem icon={<BellIcon />} class_name="icon-button" class_li_name="nav-item" link="/c" active_class="is-active-right"/>
        <NavItem icon={<DropDownIcon />} class_name="icon-button" class_li_name="nav-item" link="/d" active_class="is-active-right">
          <DropdownMenu />
        </NavItem>
      </Ul>
     
      
    </Navbar>
    <div>
     
        <Switch>
        {/* <NavLink exact activeClassName="active" to="/vdo"></NavLink> */}
          <Route exact path="/vdo"  component={vdo}></Route>
          <Route exact path="/posts" component={Post} />
          <Route exact path="/page/:id"  children={<Home />}></Route>

          <Route exact path="/"  component={Top10}></Route>
          <Route path={"/posts/:id"} children={<Post_id />}>
          {/* <Post_id id={id}></Post_id> */}
          </Route>
        </Switch>
      </div>


      <div class="pagination-bg">
        <div class="pagination">

  <NavLink to="/page/1">1</NavLink>
  <NavLink to="/page/2">2</NavLink>
  <NavLink to="/page/3">3</NavLink>
  <NavLink to="/page/4">4</NavLink>
  <NavLink to="/page/5">5</NavLink>
  <NavLink to="/page/6">6</NavLink>
  <NavLink to="/page/7">7</NavLink>
  <NavLink to="/page/8">8</NavLink>
  <NavLink to="/page/9">9</NavLink>
  <NavLink to="/page/10">10</NavLink>

        </div>
        </div>
    </BrowserRouter>
  );
}

function DropdownMenu(){

  const [activeMenu,setActiveMenu]=useState('main');

  function DropdownItem(props){
    return(
      <a href="#" className="menu-item" onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return(
    <div className="dropdown">
      <CSSTransition in ={activeMenu==='main'} unmountOnExit timeout={500} classNames="menu-primary">
        <div className="menu">
          <DropdownItem 
            leftIcon={<CircleIcon />}>Menu Header</DropdownItem>
          <DropdownItem 
            leftIcon={<CogIcon />} 
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >Clickable Button
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in ={activeMenu==='settings'} 
        unmountOnExit timeout={500} 
        classNames="menu-secondary"
        >
          <div className="menu">
            <DropdownItem 
              leftIcon={<BackIcon />} 
              goToMenu="main"
            >
              <h2>Clickable Back Button</h2>
            </DropdownItem>

            <DropdownItem
              leftIcon={<ItemIcon />}>Item 1
            </DropdownItem>

            <DropdownItem
              leftIcon={<ItemIcon />}>Item 2
            </DropdownItem>

            <DropdownItem
              leftIcon={<ItemIcon />}>Item 3
            </DropdownItem>

            <DropdownItem
              leftIcon={<ItemIcon />}>Item 4
            </DropdownItem>

        </div>
      </CSSTransition>
    </div>
  )
}

function Navbar(props) {
  return (
    <nav className="navbar">
          {props.children}
    </nav>
  );
}

function Ul(props){
  return(
    <ul className={props.class_name}>
    {props.children}
  </ul>
  );
}

function NavItem(props){
  const[open,setOpen]=useState(false);
  const[class_name,setClass_name]=useState("");
  return(
    <li className={props.class_li_name}>
      {/* <a  className={props.class_name} onClick={()=>setOpen(!open)}> */}
      <NavLink to={props.link} className={props.class_name} onClick={()=>setOpen(!open)} activeClassName={props.active_class}>
        {props.icon}
      </NavLink>
        {/* </a> */}
      {open && props.children}
    </li>
   
  )

}
function Logo(props){
  return(
    <li class="logo">
    <a href="#">
   {props.icon}
   </a>
   </li>
  )
}

export default App;
