import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./component/Page";
import Navbar from "./component/navbar";
import "./App.css";
import Swiggy from "./component/Swgy";
import Form from "./component/form";
import Student from "./component/Student";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Page />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/home" element={<Swiggy />} />
          <Route path="/form" element={<Form />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
