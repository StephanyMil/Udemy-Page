import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Course.css';

const Course = () => {
  const [activeModule, setActiveModule] = useState(null);

  const courseData = {
    title: 'Sumário', // Adicione o título do curso
    description: 'Domine o React.js e construa aplicações web interativas com este curso completo, ideal para iniciantes. Abordamos desde os conceitos básicos até a criação de projetos reais.',
    videoUrl: 'https://youtu.be/FXqX7oof0I4?si=OY4OY6D3XZvnmpdR',
    modules: [
      {
        title: 'Introdução ao React',
        progress: '0/6',
        duration: ' 72 min',
        lessons: [
            'Introdução',
            'Instalando React e ferramentas essenciais',
            'JSX: Sintaxe do React',
            'Criando seu primeiro componente React',
            'Props: Passando dados entre componentes',
            'Inserindo CSS no React',
        ],
      },
      {
        title: 'Componentes e Estado',
        progress: '0/4',
        duration: '48 min',
        lessons: [
            'Componentes Funcionais e de Classe',
            'Gerenciando o Estado com useState',
            'Passando Props entre Componentes',
            'Criando Componentes Reutilizáveis',
        ],
      },
      {
        title: 'Eventos e Hooks',
        progress: '0/3',
        duration: '40 min',
        lessons: [
            'Gerenciando Eventos', 
            'Usando useEffect', 
            'Criando Custom Hooks'],
      },
    ],
  };

  const toggleModule = (index) => {
    setActiveModule(index === activeModule ? null : index);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="video-player mb-4">
            <ReactPlayer url={courseData.videoUrl} width="100%" height="400px" />
          </div>
          <div className="description mt-4">
            <p>{courseData.description}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="course-info p-4 bg-light rounded">
            <h2>{courseData.title}</h2> {/* Título do curso */}
            <div className="modules-list mt-3">
             {/* <h3>Sumário</h3> {/* Título da lista de módulos */}
              <div className="modules-container">
                <ul>
                  {courseData.modules.map((module, index) => (
                    <li
                      key={index}
                      className={`module-item ${
                        activeModule === index ? 'active' : ''
                      }`}
                    >
                      <button
                        className="module-button"
                        onClick={() => toggleModule(index)}
                      >
                        {module.title}
                        <span className="progress-indicator">
                          {module.progress}
                        </span>
                        <span className="duration">{module.duration}</span>
                        <span className="arrow-down">▼</span>
                      </button>
                      <ul className="lessons-list">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="lesson-item">
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;