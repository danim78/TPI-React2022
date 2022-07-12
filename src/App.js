import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import NewsCard from './components/colletions/NewsCard';
import NewsList from './components/colletions/NewsList';

function App() {
  return (
    <div className="App">
      <>
        <Header></Header>
        <NewsList></NewsList>
      </>
    </div>
  );
}

export default App;
