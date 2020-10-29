// import React from 'react'
import React,{useState,useEffect} from 'react' 
import Axios from 'axios';
import '../App.css';
import {BrowserRouter, Route,Switch,Link,NavLink,useParams}from 'react-router-dom'
import Post_id from './post_id'
function Home(){
    const[data,setData]=useState([]);

    
  useEffect(()=>{
    Axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      console.log(res)
      setData(res.data)
    })
    .catch(err=>{
      console.log(err)
    });
  },[]);

    return(
        <BrowserRouter>
        <div>
          <Switch>
          <Route path={"/posts/:id"} children={<Post_id />}>
          {/* <Post_id id={id}></Post_id> */}
          </Route>
          </Switch>
        </div>
        <div class="container">
        <div class="table">
          <table border="1" >
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
            {
              data.map(i=>(<tr><td class="list">
              <Link exact to={"/posts/"+i.id} className="list"  >
              {i.id}
              </Link>
              </td><td><Link  exact to={"/posts/"+i.id} className="list" >{i.title}</Link></td></tr>))
            }
          </table> 
     
        </div>
        </div>
        </BrowserRouter>
    )
    
}
export default Home