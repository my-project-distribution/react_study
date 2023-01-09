import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input onChange={onChange} value={text}/>
      <button onClick={()=>{setText('');}}>초기화</button>
      <h1>{text}</h1>
    </div>
  );
}

export default App;