import { useState } from "react";
const Countner=()=>{
    const [count, setCount]=useState(1);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Incrementar</button>
            <button onClick={()=>setCount(count-1)}>Decrementar</button>
        </div>
    )
}    
export default Countner;