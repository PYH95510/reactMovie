import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Details";

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/movie/:id"element={<Detail/>}/>
    </Routes>
  );
}

export default App;

