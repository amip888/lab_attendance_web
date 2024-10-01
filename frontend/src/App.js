import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Register from "./component/register";
import Navbar from "./component/navbar";
import Dashboard from "./component/dashboard";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>   
        <Route path="/dashboard" element={
          [
            <Navbar/>,
            <Dashboard/>
          ]
        }/>
      </Routes>
    </HashRouter>
  
  );
}

export default App;
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./component/login";
// import Register from "./component/register";
// import Navbar from "./component/navbar";
// import Dashboard from "./component/dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login/>}/>
//         <Route path="/register" element={<Register/>}/>   
//         <Route path="/dashboard" element={
//           [
//             <Navbar/>,
//             <Dashboard/>
//           ]
//         }/>
//       </Routes>
//     </BrowserRouter>
  
//   );
// }

// export default App;
