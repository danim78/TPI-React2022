import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsList from "./components/collections/NewsList";

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
