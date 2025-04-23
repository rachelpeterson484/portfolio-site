import React from 'react';
import MainPage from "./components/MainPage";
import ExperiencePage from "./components/ExperiencePage";
import ProjectsPage from './components/ProjectsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ scrollSnapType: 'y mandatory', height: '100vh', overflowY: 'auto' }}>
      <MainPage />
      <ExperiencePage />
      <ProjectsPage />
    </div>
  );
}

export default App;
