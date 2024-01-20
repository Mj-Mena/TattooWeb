import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Head />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
