// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Course from './components/Course';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
        <a className="navbar-brand" href="#">
          <img src="./images/udemy.png" alt="Udemy Logo" />
        </a>
        <h1 className="course-title">React.js Completo: Do Iniciante ao Profissional</h1> {/* Título do curso dentro da navbar */}
      </nav>
      <main className="main-content">
        <Course />
      </main>
    </div>
  );
}

export default App;