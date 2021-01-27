import React,{useState} from 'react';
import {useGlobalContext} from './context'
import { BiSearchAlt} from 'react-icons/bi'


const Search = () => {
    const {searchCity} = useGlobalContext();
    const [city,setCity]= useState('')
    const [unit,setUnit]= useState('C')

    const handleSubmit = (e)=>{
        e.preventDefault();
        searchCity(city)
        setCity('')
    }
    return ( 
        <form className='form' onSubmit={handleSubmit}> 
            <p>add location</p>

            <label htmlFor='city'>City: </label>
            <div className='input' >
            <input className='input-bar' placeholder='add location...' type='text' id='city' value={city} onChange={(e)=>setCity(e.target.value) }></input>
            <div className ='search-icon'>
            <button className='submit-btn' type='submit'><BiSearchAlt size={35} fill='#f5f5f5'/></button>
            
            </div>
            </div>
            
            
        </form>
     );
}
 
export default Search;