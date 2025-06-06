import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import HomePage from './components/HomePage.jsx';
import CreateExercisePage from './components/CreateExercisePage.jsx';
import EditExercisePage from './components/EditExercisePage.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Exercise Tracker</h1>
        <p>Track your workouts</p>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateExercisePage />} />
        <Route path="/edit/:id" element={<EditExercisePage />} />
      </Routes>
      <footer>© 2025 Tyler Klein</footer>
    </BrowserRouter>
  );
}

export default App;
