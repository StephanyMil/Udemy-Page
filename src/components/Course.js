import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Course.css';

const Course = () => {
  const [activeModule, setActiveModule] = useState(null);

  const courseData = {
    title: 'Sumário', 
    description: 'Domine o React.js e construa aplicações web interativas com este curso completo, ideal para iniciantes. Abordamos desde os conceitos básicos até a criação de projetos reais.',
    videoUrl: 'https://youtu.be/FXqX7oof0I4?si=OY4OY6D3XZvnmpdR',
    modules: [
      {
        title: 'Introdução ao React',
        progress: '  1/6',
        duration: ' 76 min',
        lessons: [
            'Introdução',
            'Instalando React e ferramentas essenciais',
            'Entendendo o JSX',
            'Criando componentes no React',
            'Trabalhando com props',
            'Inserindo CSS no React',
        ],
      },
      {
        title: 'Componentes e Estado',
        progress: '  0/5',
        duration: '48 min',
        lessons: [
            'Utilizando React fragments',
            'Avançando em props',
            'Eventos no React (onClick, onCharge e onSubmit',
            'useState na prática',
            'Passar eventos por props',
        ],
      },
      {
        title: 'Estrutura de dados e Especificações',
        progress: '  0/5',
        duration: '60 min',
        lessons: [
            'Renderização condicional (if)', 
            'Redenrização de listas', 
            'State Lift',
            'Implementando o React Router',
            'React Icons',
          ],
      },
      {
        title: 'Construindo o rojeto do curso',
        progress: '  0/21',
        duration: '252 min',
        lessons: [
            'Apresentação do projeto do curso', 
            'Criando o projeto do curso', 
            'Estruturando o projeto',
            'Navbar e footer',
            'Criando a home',
            'Página para formulário de projeto',
            'Componentização de formulário',
            'Conectando com API pelo React',
            'Inserindo dados no banco de dados via API',
            'Mensagens do Sistema',
            'Criando Dashboard',
            'Resgatando projetos do banco de dados',
            'Criando componente de loader',
            'Removendo projetos',
            'Página de edição de dados',
            'Exibindo detalhes do projeto',
            'Atualização do projeto',
            'Criando área de serviços',
            'Adicionando novos serviços',
            'Exibindo os serviços',
            'Removendo serviços',
          ],
      },
      {
        title: 'Conclusão',
        progress: '  0/2',
        duration: '14 min',
        lessons: [
            'Conclusão do curso',
            'Ajustando o projeto para o React Router 6'
          ],
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