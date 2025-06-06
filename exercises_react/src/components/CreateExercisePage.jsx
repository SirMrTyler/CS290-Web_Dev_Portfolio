import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateExercisePage() {
  const navigate = useNavigate();
  const [exercise, setExercise] = useState({
    name: '', reps: '', weight: '', unit: 'kgs', date: ''
  });

  const handleChange = e => setExercise({ ...exercise, [e.target.name]: e.target.value });

  const createExercise = async () => {
    const res = await fetch('/exercises', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...exercise,
        reps: Number(exercise.reps),
        weight: Number(exercise.weight)
      })
    });
    if (res.status === 201) {
      alert('Exercise created');
    } else {
      alert('Exercise Creation Failed');
    }
    navigate('/');
  };

  return (
    <section>
      <h2>Create Exercise</h2>
      <form>
        <input name="name" value={exercise.name} onChange={handleChange} />
        <input type="number" name="reps" value={exercise.reps} onChange={handleChange} />
        <input type="number" name="weight" value={exercise.weight} onChange={handleChange} />
        <select name="unit" value={exercise.unit} onChange={handleChange}>
          <option value="kgs">kgs</option>
          <option value="lbs">lbs</option>
        </select>
        <input name="date" value={exercise.date} onChange={handleChange} />
        <button type="button" onClick={createExercise}>Create</button>
      </form>
    </section>
  );
}

export default CreateExercisePage;