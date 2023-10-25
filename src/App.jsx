import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Celeb from './celebrities.json'
import Search from './Search.jsx'

function App() {
  const [touch,setTouch]=useState(null);

  function toggle(i){
     if(touch===i)
     return setTouch(null);

     setTouch(i);
  }

  function getAge(dob){
    dob = new Date(dob);
    let currDate = new Date();
    let milliseconds = currDate - dob;
    let days = milliseconds / (86400 * 1000);
    return parseInt(Math.round(days / 365)) + ' years';
  }
  
  // const [isActive,setIsActive]=useState('false');
  return (
    <>
    <Search data={Celeb} /> 
      <div className='accordion'>
        {
        Celeb.map((a,index)=>{
          return(
            <div className="item" key={a.id}>
                <div>
                    <img src={a.picture} height={70} width={70} style={{'border-radius':'50%','object-fit':'contain'}} />
                </div>
               <div className='Names' onClick={()=>toggle(index)}>
              {a.first +" "+ a.last}
             <span>{touch===index? '-': '+'}</span>
             
             <div className={touch===index? 'content-show': 'age'}>{getAge(a.dob)} </div>
             <div className={touch===index? 'content-show': 'gender'}>{a.gender}</div>
             <div className={touch===index? 'content-show': 'country'}>{a.country}</div>
             <div className={touch===index? 'content-show': 'description'}>{a.description}</div>
             </div>
            </div>
          )
        })
        }
          
      </div>
      
    </>
  )
}

export default App;
