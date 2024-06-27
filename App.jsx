import { BrowserRouter, Route, Routes } from "react-router-dom";
import Emplisting from "./Emplisting";
import Empcreate from "./Empcreate";
import Empdetails from "./Empdetails";
import Empedit from "./Empedit";
import './App.css'

function App() {
  return (
    <div className="body">
      <h1 className="head">React js crud operation </h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Emplisting />}></Route>
          <Route path="/employee/create" element={<Empcreate />}></Route>
          <Route path="/employee/details/:empid" element={<Empdetails/>}></Route>
          <Route path="/employee/edit/:empid" element={<Empedit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
