import React, { useState } from 'react';
import logo from './logo.svg';
import api from './services/api';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [ url, setUrl ] = useState('');

  async function downloadVideo() {

    const response = await api.post('/store', {"url": url});
    console.log(response.data);

    //TODO download link
    const filename = JSON.parse(response.data);
    console.log(`http://localhost:3334/download?file="${filename.file}"`);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Download YouTube videos
        </p>
        <input value={url} onChange={ (e) => {{ setUrl(e.target.value )}}}></input>
        <div className="download-button">
          <Button variant="danger" onClick={downloadVideo}>Download</Button>
        </div>
        
      </header>
    </div>
  );
}

export default App;
