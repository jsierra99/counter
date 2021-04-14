import React, { useState, useContext } from 'react';
import "./counter.scss";
import { ThemeContext } from "../App.js";

const Counter = () => 
{
    const [count, setCount] = useState(5);
    const theme = useContext(ThemeContext);
    return (
        <section className="counter">
            <div className="container">
                <button style={theme}  onClick={() => setCount(x => count - 1)}>-</button>
                <span>{count}</span>
                <button style={theme} onClick={() => setCount(x => count + 1)}>+</button>
            </div>
        </section>
    )
}

export default Counter
