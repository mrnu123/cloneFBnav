import {BrowserRouter, Route,Switch,Link}from 'react-router-dom'
import Nav from './components/nav';
import vdo from './components/vdo';
import home from './components/home';
function App() {
  return (
    // <BrowserRouter> 
    <Nav></Nav>
    
  //    <div>
     
  //       <Switch>
  //         <Route exact path="/vdo" component={vdo} />
  //         <Route exact path="/home" component={home} />
  //       </Switch>
  //     </div>
  //     </BrowserRouter>
  )
}

export default App;
