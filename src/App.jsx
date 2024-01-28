import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Head />}></Route>
          <Route path="/gallery/:userID" element={<Gallery/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
