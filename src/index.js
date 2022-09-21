import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import JobCardsList from './components/JobCardsList';
// import Page2 from './pages/SignIn';
// import Page3 from './pages/Page3';
// import SignIn from './pages/SignIn';
// import LogInSide from './pages/LogInSide';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<JobCardsList />} />
        <Route path="home" element={<JobCardsList />} />
        <Route path="jobs" element={<JobCardsList />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

