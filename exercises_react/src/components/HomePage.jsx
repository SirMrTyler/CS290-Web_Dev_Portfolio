import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

// Displays all exercises in a table format with edit and delete "buttons"

function HomePage() {
  // Local state holds all retrieved exercises
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  // Fetch exercises once when component mounts
  useEffect(() => {
    fetch('/exercises')
      .then(res => res.json())
      .then(setExercises);
  }, []);

  // Delete an exercise then remove it from local state
  const deleteExercise = async (id) => {
    const res = await fetch(`/exercises/${id}`, { method: 'DELETE' });
    if (res.status === 204) {
      setExercises(exercises.filter(e => e._id !== id));
    }
  };

  // Render the exercise table
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map(ex => (
            <tr key={ex._id}>
              <td>{ex.name}</td>
              <td>{ex.reps}</td>
              <td>{ex.weight}</td>
              <td>{ex.unit}</td>
              <td>{ex.date}</td>
              <td>
                <FaEdit onClick={() => navigate(`/edit/${ex._id}`, { state: ex })} />
                <FaTrash onClick={() => deleteExercise(ex._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default HomePage;