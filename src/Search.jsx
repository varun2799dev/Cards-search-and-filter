import React from 'react'
import './App.css'

export default function Search(props) {
    function searchResults(receive){
        console.log('clicked', receive);
        var x = document.getElementById('mysearch').value;
        receive.map((i)=>{
            if(x===i.first || x===i.last)
            {
            <div className='Names'>
            <div >{i.first+ " "+i.last}</div>
            <div className='age'>{i.age}</div>
            <div className='gender'>{i.gender}</div>
            <div className='country'>{i.country}</div>
            <div className='description'>{i.description}</div>
            </div>

            }
        }
        );
    }

  return (
    <div>
      
        <input id='mysearch' type="text" placeholder="Search" aria-label="Search"/>
        <button className="btn" onClick={()=>searchResults(props.data)} >Search</button>
      
    </div>
  )
}
