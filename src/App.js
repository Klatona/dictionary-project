import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
     
      <header className="App-header">
    <h1>
      Dictionary
      </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="forest"/>
      </main>
  
    <footer className="Kristen"> 
       <a
          href="https://github.com/Klatona/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced code by,{" "}
        </a>
      <a
          href="https://www.linkedin.com/in/kristenlatona"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kristen Latona{" "}
        </a>
        and hosted on {" "} 
        <a href="https://jolly-sammet-acc897.netlify.app/" target="_blank"
          rel="noopener noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}


