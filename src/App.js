import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Results from './components/Results';
import request from './request';
import { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending)
  return (
    <div className="app">
      <Header/>
      <Navbar setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
