import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
