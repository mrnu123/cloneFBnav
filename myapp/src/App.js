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
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
// import {ReactComponent as add_btn} from './image/add_circle.svg'
// import add_btn from './image/add_circle.svg'
function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<MsgIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<DropDownIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
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
      <ul className="navbar-nav">
      {props.children}
      </ul>
    </nav>
  );
}

function NavItem(props){
  const[open,setOpen]=useState(false);
  return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={()=>setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}
export default App;
