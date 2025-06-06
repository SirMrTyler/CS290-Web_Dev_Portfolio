import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import HomePage from './components/HomePage.jsx';
import CreateExercisePage from './components/CreateExercisePage.jsx';
import EditExercisePage from './components/EditExercisePage.jsx';
import './App.css';

// Top-level component defining all routes for the application

// Render navigation, header and page content based on the route
function App() {
  return (
    <BrowserRouter>
      {/* always show navigation and a simple header */}
      <Navigation />
      <header>
        <h1>Exercise Tracker</h1>
        <p>Track your workouts</p>
      </header>
      
      {/* route declarations */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateExercisePage />} />
        <Route path="/edit/:id" element={<EditExercisePage />} />
      </Routes>
      {/* site footer visible on all pages */}
      <footer>© 2025 Tyler Klein</footer>
    </BrowserRouter>
  );
}

export default App;
