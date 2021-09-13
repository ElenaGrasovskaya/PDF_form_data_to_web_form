import {useEffect, useState } from 'react';
import './App.css';
import FormPageRender from './FormPageRender';


function LoadPageData(props) {
    console.log("This is Page ID PROPS", props.pageID)
    const [data,setData]=useState([]);
    
    const getData=()=>{
      fetch(`pageInfo_${props.pageID}.json`
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
               });
      
    }
     
  useEffect(()=>{
          getData();
  },[])

    console.log("All Pages data", data);
    if(data.length===0)
    {
      return (
        <div>
             
          STILL LOADING
        
        </div>
      );
    }
    else {
  return (
      <div className="App">
        <FormPageRender pageData = {data} pageN = {props.pageN}/>
      </div>
    );
    }

  }
  
  export default LoadPageData;