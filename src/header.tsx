import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header/Header.tsx";

ReactDOM.createRoot(document.getElementById('header-root')!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
);
