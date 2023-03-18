//import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [text, setText] = useState('Dark Mode'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      setText('Light Mode')
      showAlert('Dark mode has been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setText('Dark Mode')
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Try TextUtils - Enter Your Text Here"/>}>
          </Route>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
