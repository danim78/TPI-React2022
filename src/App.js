import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import NewsList from './components/colletions/NewsList';
import { Routes, Route } from 'react-router';
import SearchForm from './components/forms/SearchForm';

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
