import React, { useState } from 'react'
import './App.css'

export default function Search({onSearch}) {

  const [search, setSearch]=useState('');

  const handleSearch = () =>{
    onSearch(search);
  };
    
  return (
    <div>
      
      <input type="text" placeholder="Search here" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={handleSearch} id='search'>Search</button>
      
    </div>
  )
}
