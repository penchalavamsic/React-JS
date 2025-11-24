import {useState, useEffect} from 'react'
function Counter(){
    const [count, setCount]= useState(0)
    useEffect(()=>{
        console.log('counter changed: ',count)
    },[count])
    return(
        <div>
            <h3>Counter App</h3>
            <h2>count;{count}</h2>
            {/*Increase */}
            <button onClick={()=>setCount(count+1)}>Increment</button>
            {/*Decrease */}
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            {/*Reset*/}
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
    
}
export default Counter