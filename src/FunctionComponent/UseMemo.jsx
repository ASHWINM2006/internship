import { useState } from "react";
var slowFunction = ()=>{
    for(var slow = 0; slow<1000000000;slow++){

    }
}
const UseMemo = () => {
    var [num,setNum] = useState(0);
    var [dark,setdark] = useState(false)
    var styling = {
        backgroundColor: dark ? "black" : "white",
        color:dark? "white" : "black"
    }
    return(
        <div>
            <h2>This page is ment for useMemo Hook.</h2>
            <input type="number" value={num}></input>
            <button onClick={()=>setdark(curTheme => !curTheme)}>Toggle Theme</button>
            <h4 style={styling}>The number is {num}</h4>
        </div>
    )
}
export default UseMemo;