import React,{useState,useEffect} from 'react' 
import Axios from 'axios';
import {BrowserRouter, Route,Switch,Link,NavLink,useParams}from 'react-router-dom'


function Post_id(){
    const[data,setData]=useState({});
    // const[id,setId]=useState();
    let {id}=useParams();
    
    useEffect(()=>{
        // setId(props.id)
        Axios.get('http://jsonplaceholder.typicode.com/posts/'+id)
        .then(res=>{
          console.log(res)
          setData(res.data)
          
        })
        .catch(err=>{
          console.log(err)
        });
      },[id]);
      
    return(
        <BrowserRouter>
        
        <div class="container">
        <div class="table">
        <table border="1">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Details</th>
            </tr>
            
            <tr>
              <td>
              {data.id}
              </td>
              <td>
                {data.title}
              </td>
              <td>
                {data.body}
              </td>
            </tr>
            
          </table>
          </div>
          </div>
          </BrowserRouter>
    )
}
export default Post_id