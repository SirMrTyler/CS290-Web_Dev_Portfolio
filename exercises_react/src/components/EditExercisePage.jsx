import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function EditExercisePage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [exercise, setExercise] = useState(state);

  const handleChange = e => setExercise({ ...exercise, [e.target.name]: e.target.value });

  const updateExercise = async () => {
    const res = await fetch(`/exercises/${exercise._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...exercise,
        reps: Number(exercise.reps),
        weight: Number(exercise.weight)
      })
    });
    if (res.status === 200) {
      alert('Update Successful');
    } else {
      alert('Update Failed');
    }
    navigate('/');
  };

  return (
    <section>
      <h2>Edit Exercise</h2>
      <form>
        <label className='name'>Name:
          <input name="name" placeholder="Exercise name..." value={exercise.name} onChange={handleChange} />
        </label>

        <label className='reps'>Reps:
          <input type="number" placeholder="Number of reps..." name="reps" value={exercise.reps} onChange={handleChange} />
        </label>

        <label className='weight'>Weight:
          <input type="number" placeholder="Weight lifted..." name="weight" value={exercise.weight} onChange={handleChange} />
        </label>

        <select name="unit" value={exercise.unit} onChange={handleChange}>
          <option value="kgs">kgs</option>
          <option value="lbs">lbs</option>
        </select>
        
        <label className='date'>Date:
          <input name="date" placeholder="MM-DD-YY" value={exercise.date} onChange={handleChange} />
        </label>
        <button type="button" onClick={updateExercise}>Save</button>
      </form>
    </section>
  );
}

export default EditExercisePage;