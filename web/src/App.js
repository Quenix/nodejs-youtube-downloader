import React, { useState } from 'react';
import logo from './logo.svg';
import api from './services/api';
import './App.css';

function App() {
  const [ url, setUrl ] = useState('');

  async function downloadVideo() {

    const response = await api.post('/download', {"url": url});
    console.log(response.data);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Download YouTube videos
        </p>
        <input value={url} onChange={ (e) => {{ setUrl(e.target.value )}}}></input>
        <button onClick={downloadVideo}>Download</button>
      </header>
    </div>
  );
}

export default App;
