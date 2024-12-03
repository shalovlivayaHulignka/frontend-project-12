import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Components/Header.jsx';
import Header from "./Components/Header.jsx";
import Login from "./Pages/Login.jsx";
import Error from "./Pages/Error.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
