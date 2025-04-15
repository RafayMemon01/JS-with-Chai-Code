import { useState } from "react";

import Hello from "./Hello.jsx";

const App = () => {
  const [num, setnum] = useState(0);

  let num1 = 5;
  

  return (
    <>
      Hello Hamza Bhai! {num1}

      <h2>{num}</h2>

      <button onClick={()=>{setnum(num+1)}}>Click</button>
      <Hello number={num1} num={num} setnum={setnum}/>
    </>
  );
};

export default App;
