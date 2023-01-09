import React,{ useState } from "react";

function App() {
    const [number, setnumber] = useState(0);
    return (
    <div className="App">
        <h1>{number}</h1>
        <button onClick={()=>{setnumber(number+1)}}>+1</button>
        <button onClick={()=>{setnumber(number-1)}}>-1</button>
    </div>
  );
}

export default App;
