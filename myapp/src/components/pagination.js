import '../css/pagination.css';
import {BrowserRouter, Route,Switch,Link,NavLink,useParams}from 'react-router-dom'
import Home from './home'
import Post from './post'
function pagination(){
    // const[data,setData]=useState([]);
    return(
        <BrowserRouter>
          <div>
     
     <Switch>
     <Route exact path="/page/:id"  children={<Home />}></Route>
     <Route exact path="/posts" children={<Post></Post>} />

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
    )
}
export default pagination