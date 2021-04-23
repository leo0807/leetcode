import React, { useState, useEffect } from 'react';
function App() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    let promise = null;
    const URL = [""];
    useEffect(() => {
        promise.then((res) => {
            setData(res);
            promise = null;
        })
    })

    async function fecthData() {
        setLoading(true);
        if (promise) await promise;
        fetch(URL).then(res => {
            setLoading(false);
        })
    }
    return (
        <div className="App">
            {loading && <div className="animation"></div>}
            <button onClick={fecthData}>Click Me</button>
        </div>
    )
}