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
        Coded by Kristen
      </footer>
   </div>
   </div>
    </div>
  );
}


