import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Results from './components/Results';

function App() {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <Results/>
    </div>
  );
}

export default App;
