import React from 'react';
import ReactPlayer from 'react-player';
import './Course.css';

const Course = () => {
  const courseData = {
    description: 'Domine o React.js e construa aplicações web interativas com este curso completo, ideal para iniciantes. Abordamos desde os conceitos básicos até a criação de projetos reais.',
    videoUrl: 'https://youtu.be/FXqX7oof0I4?si=OY4OY6D3XZvnmpdR', 
    modules: [
      { 
        title: 'Introdução ao React', 
        lessons: [
          'Instalando React e ferramentas essenciais',
          'JSX: Sintaxe do React',
          'Criando seu primeiro componente React', 
          'Props: Passando dados entre componentes',
          'Inserindo CSS no React',
        ] 
      },
    ]
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
            <h2>{courseData.title}</h2>
            <div className="modules-list mt-3">
              <h3>Sumário</h3>
              <div className="modules-container"> {/* Adicione um container para os módulos */}
                <ul>
                  {courseData.modules.map((module, moduleIndex) => (
                    <li key={moduleIndex} className="module-item">
                      <button className="module-button">{module.title}</button>
                      <ul className="buttons-container">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex}><button className="lesson-button">{lesson}</button></li>
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