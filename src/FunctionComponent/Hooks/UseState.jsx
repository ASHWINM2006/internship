import { useState } from "react";

const UseState = () => {
    const initialvalue = 0; // Default value
    const [num, setNum] = useState(initialvalue); // Initialize state with the default value

    return (
        <div>
            <h1>This is useState</h1>
            <button onMouseEnter={() => setNum(num - 1)}> -</button>
            <h4>The number is {num}</h4>
            <button onClick={() => setNum(num + 1)}> +</button>
            <button onDoubleClick={() => setNum(initialvalue)}>Reset</button>
        </div>
    );
};

export default UseState;