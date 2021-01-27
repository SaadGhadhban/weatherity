import React,{useContext} from 'react';
import Card from './cards'
import {useGlobalContext} from './context';

const Body = () => {
    const {state} = useGlobalContext();
    
    console.log(state);
    return ( 
    <div className='wrapper-container'>
     
    <div className='body-container'>
            {state.map(card =>{
                
                 return <Card key={card.id} prob={card}/>
            })}
             </div>
             
             </div>
             );
}
 
export default Body;