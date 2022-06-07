import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

function App() {

  return (
    <div>
      <Child name="Billy" id={123} />
    </div>
  )
}

// function App() {
//   const [name,setName] = useState<string>("");
//   const [age,setAge] = useState<number>();

//   return (
//     <div>
//       <p>Name: <input onChange={(e) => setName(e.target.value)} /></p>
//       <p>Age: <input onChange={(g) => setAge(Number(g.target.value))} /></p>
//       <p>Hello {name} {age}</p>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
