import React from "react";
import { useState } from "react";
const Home = () => {
    const [count, setCount] = useState(0);
    
    const handleIncrease = () => {
        setCount(count + 1);
    };
    return (
        <>
            <h1>This is HomePage</h1>
            <div>
                <button type="button" onClick={handleIncrease}>
                    Increase
                </button>
                <div>{ count }</div>
            </div>
        </>
    );
}

export default Home;