import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import About from './components/HomePage';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from "react-cookie";


import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

//Create Pages
import CreateAccountPage from './pages/CreateAccountPage';
import CreateListingPage from './pages/CreateListingPage';
import CreateComicPage from './pages/CreateComicPage';
import CreateReviewPage from './pages/CreateReviewPage';
import CreatePublisherPage from './pages/CreatePublisher';

//Deletion pages
import DeleteComicPage from './pages/DeleteComicPage';

//User Pages
import UsersReviewPage from './pages/UsersReviewPage';
import ViewUserHomePage from './pages/ViewUserHomePage';



import LoginPage from './pages/LoginPage';
import HomePageRender from './pages/HomePage';
import BuyPage from './pages/BuyPage';


//Router
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Index */}
        <Route index path='/' element={<HomePageRender />}/>


        {/* User pages */}
        <Route path="/user/login" element={<LoginPage />}/>
        <Route path="/user/account" element={<ViewUserHomePage />}/>
        <Route path="/user/reviews/:userID" element={<UsersReviewPage />}/>
        {/* <Route path="/user/michel/login" element={<UsersReviewPage />}/> */}

        {/* Creation Pages */}
        <Route path="/create/signup" element={<CreateAccountPage />}/>
        <Route path="/create/listing" element={<CreateListingPage /> }/>
        <Route path="/create/comic" element={<CreateComicPage /> }/>
        <Route path="/create/review" element={<CreateReviewPage /> }/>
        <Route path='/create/publisher' element={<CreatePublisherPage />}/>


        {/* Deletion Pages */}
        <Route path='/delete/comic' element={<DeleteComicPage />}/>

        {/* Viewings */}
        <Route path="/view/buy" element={<BuyPage />}>
        
        
        
        
        </Route>
      </Routes>
    </BrowserRouter>
  );}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
