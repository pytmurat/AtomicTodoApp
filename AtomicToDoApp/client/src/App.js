import './App.css';
import { useEffect,useState } from 'react';

import Template from './components/template/Template';

function App() {
  const[todos,setTodos]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/todos").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes => setTodos(jsonRes))
  })

  

  return (
    <div className="App">
     
      <Template todos={todos}/>
   
      
    </div>
  );
}

export default App;
