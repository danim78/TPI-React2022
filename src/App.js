import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router';
import SearchForm from './components/forms/SearchForm';
import { useEffect, useState } from 'react';


function App() {
  

  return (
    <div className="App">
      <>
      <Layout>
        <Routes>
          <Route path="/" element={<SearchForm />}/>
          <Route path="/busqueda" element={<SearchForm />}/>
        </Routes>
      </Layout>
      </>
    </div>
  );
}

export default App
