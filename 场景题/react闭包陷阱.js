import React, { createRef, useEffect, useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let timer = setInterval(() => {
            console.log(count);//一直输出0
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
    function traceInput(e) {
        console.log(e.target.value);
    }
    function clickHanlder() {
        setCount(count + 1);
        console.log(count);//有变化 + 1
    }
    let inputRef = createRef();
    return (
        <div className="App">
            <input type="text" onChange={(e) => traceInput(e)} />
            <input type="text" ref={inputRef} onChange={() => console.log(inputRef.current.value)} />
            <button onClick={clickHanlder}>{count}</button>
        </div>
    );
}

export default App;
