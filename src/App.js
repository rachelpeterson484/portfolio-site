import React from 'react';
import MainPage from "./components/MainPage";
import ExperiencePage from "./components/ExperiencePage";
import ProjectsPage from './components/ProjectsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactsPage from './components/ContactsPage';

function App() {
  return (
    <div style={{ scrollSnapType: 'y mandatory', height: '100vh', overflowY: 'auto' }}>
      <div style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <MainPage />
      </div>

      <div style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <ContactsPage />
      </div>

      <div style={{ scrollSnapAlign: 'start', height: '100vh' }}>
        <ExperiencePage />
      </div>

      <div style={{ scrollSnapAlign: 'start', height: '100vh', overflowY: 'auto' }}>
        <ProjectsPage />
      </div>

    </div>
  );
}

export default App;
