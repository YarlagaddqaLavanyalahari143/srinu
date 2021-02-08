import React,{useState} from 'react'

export default function Hooksinc(){
    const [count,incCount]=useState(0)
    
   
   const inc=()=>{
       incCount(count+1)
   }
   const dnc=()=>{
       if(count>1){
        incCount(count-1)
       
       }
   
   }
    
    return(
        <div>
              <h1 style={{background:"blue",color:"white"}}>{count}</h1>
              <button onClick={()=>inc()}>Inc</button>
            
              <button onClick={()=>dnc()}>Dec</button>
        </div>
    )
}