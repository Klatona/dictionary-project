import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="card body">
        <div className="card-body background">
      <header className="App-header">
    <h1>
      Dictionary
      </h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="Kristen"> 
        Coded by Kristen and hosted on {" "} 
        <a href="https://jolly-sammet-acc897.netlify.app/" target="_blank"
          rel="noopener noreferrer">
          Netlify
        </a>
      </footer>
   </div>
   </div>
    </div>
  );
}


