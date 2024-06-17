import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Course from './components/Course';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
        <a className="navbar-brand" href="#">
          <img src="./images/udemy.png" alt="Udemy Logo"/>
        </a>
      </nav>
      <h1 className="course-title">Aprenda React do Zero: O Guia Completo para Iniciantes</h1>
      <main className="main-content">
        <Course />
      </main>
      <footer className="footer">
        © 2024 Udemy - Todos os direitos reservados
      </footer>
    </div>
  );
}

export default App;