import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import About from './components/HomePage';
import reportWebVitals from './reportWebVitals';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePageRender from './pages/HomePage';
import BuyPage from './pages/BuyPage';
//import BuyPage from './pages/BuyPage';


//Router
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePageRender />}/>
        <Route path="Login" element={<LoginPage />}/>
        <Route path="Signup" element={<SignupPage />}/>
        <Route path="buy" element={<BuyPage />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
