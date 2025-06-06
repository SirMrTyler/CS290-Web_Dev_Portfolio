import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Form for creating a new exercise document (I would call it a table personally, relational database brain "don't like")

function CreateExercisePage() {
  const navigate = useNavigate();
  // Controlled form data for new exercise
  const [exercise, setExercise] = useState({
    name: '', reps: '', weight: '', unit: 'kgs', date: ''
  });

  // Update state when form fields change
  const handleChange = e => setExercise({ ...exercise, [e.target.name]: e.target.value });

  // Send POST request and redirect to home page
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

  // Render the exercise creation form
  return (
    <section>
      <h2>Create Exercise</h2>
      <form className='exercise-form'>
        <label className='name'>Name:
          <input name="name" placeholder="Exercise name..." value={exercise.name} onChange={handleChange} />
        </label>

        <label className='reps'>Reps:
          <input type="number" name="reps" placeholder="Number of reps..." value={exercise.reps} onChange={handleChange} />
        </label>

        <label className='weight'>Weight:
          <input type="number" name="weight" placeholder="Weight lifted..." value={exercise.weight} onChange={handleChange} />
        </label>

        <label className='unit'>Unit:
          <select name="unit" value={exercise.unit} onChange={handleChange}>
            <option value="kgs">kgs</option>
            <option value="lbs">lbs</option>
          </select>
        </label>

        <label className='date'>Date:
          <input name="date" placeholder="MM-DD-YY" value={exercise.date} onChange={handleChange} />
        </label>

        <button type="button" onClick={createExercise}>Create</button>
      </form>
    </section>
  );
}

export default CreateExercisePage;