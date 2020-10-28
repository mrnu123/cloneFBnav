// import './index.css';
// import {ReactComponent as PlusIcon} from './image/add_circle.svg'
// import {ReactComponent as BellIcon} from './image/bell.svg'
// import {ReactComponent as MsgIcon} from './image/messenger.svg'
// import {ReactComponent as DropDownIcon} from './image/dropdown.svg'
// import {ReactComponent as CogIcon} from './image/cog.svg'
// import {ReactComponent as ChevronIcon} from './image/chevron.svg'
// import {ReactComponent as CircleIcon} from './image/circle.svg'
// import {ReactComponent as BackIcon} from './image/arrow.svg'
// import {ReactComponent as ItemIcon} from './image/flash.svg'
// import {ReactComponent as FBIcon} from './image/facebook_logo.svg'
// import {ReactComponent as HomeIcon} from './image/home.svg'
// import {ReactComponent as VDOIcon} from './image/ondemand_video.svg'
// import {ReactComponent as MarketIcon} from './image/storefront.svg'
// import {ReactComponent as CommunityIcon} from './image/groups.svg'
// import {ReactComponent as GameIcon} from './image/sports_esports.svg'
// import React, { useState, useEffect, useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import {ReactComponent as add_btn} from './image/add_circle.svg'
// import add_btn from './image/add_circle.svg'
import Nav from './components/nav'
function App() {
  return (
    <Nav></Nav>
//     <Navbar >
//     {/* <NavItemLeft iconLeft={<PlusIcon />} /> */}

//       <Ul class_name="left">
//         <Logo icon={<FBIcon />} />
//       </Ul>

//       <Ul class_name="center">
//         <NavItem icon={<HomeIcon />} class_name="icon-center" class_li_name="nav-item-center" link="index.html"/>
//         <NavItem icon={<VDOIcon />} class_name="icon-center" class_li_name="nav-item-center" link="vdo.html"/>
//         <NavItem icon={<MarketIcon />} class_name="icon-center" class_li_name="nav-item-center" link="#"/>
//         <NavItem icon={<CommunityIcon />} class_name="icon-center" class_li_name="nav-item-center" link="#"/>
//         <NavItem icon={<GameIcon />} class_name="icon-center" class_li_name="nav-item-center" link="#"/>
//       </Ul>

//       <Ul class_name="right">
//         <NavItem icon={<PlusIcon />} class_name="icon-button" class_li_name="nav-item"/>
//         <NavItem icon={<MsgIcon />} class_name="icon-button" class_li_name="nav-item"/>
//         <NavItem icon={<BellIcon />} class_name="icon-button" class_li_name="nav-item"/>
//         <NavItem icon={<DropDownIcon />} class_name="icon-button" class_li_name="nav-item">
//           <DropdownMenu />
//         </NavItem>
//       </Ul>

     
//     </Navbar>
//   );
// }

// function DropdownMenu(){

//   const [activeMenu,setActiveMenu]=useState('main');

//   function DropdownItem(props){
//     return(
//       <a href="#" className="menu-item" onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu)}>
//         <span className="icon-left">{props.leftIcon}</span>
//         {props.children}
//         <span className="icon-right">{props.rightIcon}</span>
//       </a>
//     );
//   }
//   return(
//     <div className="dropdown">
//       <CSSTransition in ={activeMenu==='main'} unmountOnExit timeout={500} classNames="menu-primary">
//         <div className="menu">
//           <DropdownItem 
//             leftIcon={<CircleIcon />}>Menu Header</DropdownItem>
//           <DropdownItem 
//             leftIcon={<CogIcon />} 
//             rightIcon={<ChevronIcon />}
//             goToMenu="settings"
//           >Clickable Button
//           </DropdownItem>
//         </div>
//       </CSSTransition>

//       <CSSTransition in ={activeMenu==='settings'} 
//         unmountOnExit timeout={500} 
//         classNames="menu-secondary"
//         >
//           <div className="menu">
//             <DropdownItem 
//               leftIcon={<BackIcon />} 
//               goToMenu="main"
//             >
//               <h2>Clickable Back Button</h2>
//             </DropdownItem>

//             <DropdownItem
//               leftIcon={<ItemIcon />}>Item 1
//             </DropdownItem>

//             <DropdownItem
//               leftIcon={<ItemIcon />}>Item 2
//             </DropdownItem>

//             <DropdownItem
//               leftIcon={<ItemIcon />}>Item 3
//             </DropdownItem>

//             <DropdownItem
//               leftIcon={<ItemIcon />}>Item 4
//             </DropdownItem>

//         </div>
//       </CSSTransition>
//     </div>
//   )
// }

// function Navbar(props) {
//   return (
//     <nav className="navbar">
//           {props.children}
//     </nav>
//   );
// }

// function Ul(props){
//   return(
//     <ul className={props.class_name}>
//     {props.children}
//   </ul>
//   );
// }

// function NavItem(props){
//   const[open,setOpen]=useState(false);
//   return(
//     <li className={props.class_li_name}>
//       <a href={props.link} className={props.class_name} onClick={()=>setOpen(!open)}>
//         {props.icon}
//       </a>
//       {open && props.children}
//     </li>
   
//   )
// }
// function Logo(props){
//   return(
//     <li class="logo">
//     <a href="#">
//    {props.icon}
//    </a>
//    </li>
  )
}

export default App;
