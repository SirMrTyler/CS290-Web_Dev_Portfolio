// Assignment 9 - Exercise Tracker API
// Author: Tyler Klein (OSU ID: 935-652-283)
// Date: 2025-05-20
// Course: CS 290 Section 400
// Description: This controller file handles the HTTP requests and responses for
//              exercise-related operations. It uses the exercises_model.mjs
//              file to interact with the database.
import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './exercises_model.mjs';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

function validExercise(body) {
  const { name, reps, weight, unit, date } = body;
  return (
    typeof name === 'string' && name.trim().length > 0 &&
    Number.isInteger(reps) && reps > 0 &&
    Number.isInteger(weight) && weight > 0 &&
    (unit === 'kgs' || unit === 'lbs') &&
    typeof date === 'string' && /^\d{2}-\d{2}-\d{2}$/.test(date)
  );
}

app.post('/exercises', asyncHandler(async (req, res) => {
  if (validExercise(req.body)) {
    const exercise = await exercises.createExercise(req.body);
    res.status(201).json(exercise);
  } else {
    res.status(400).json({ Error: 'Invalid Request' });
  }
}));

app.get('/exercises', asyncHandler(async (req, res) => {
  const all = await exercises.getAllExercises();
  res.status(200).json(all);
}));

app.get('/exercises/:id', asyncHandler(async (req, res) => {
  const exercise = await exercises.getExerciseById(req.params.id);
  if (exercise) {
    res.status(200).json(exercise);
  } else {
    res.status(404).json({ Error: 'Not Found' });
  }
}));

app.put('/exercises/:id', asyncHandler(async (req, res) => {
  if (!validExercise(req.body)) {
    res.status(400).json({ Error: 'Invalid Request' });
    return;
  }
  const updated = await exercises.updateExercise(req.params.id, req.body);
  if (updated) {
    res.status(200).json(updated);
  } else {
    res.status(404).json({ Error: 'Not Found' });
  }
}));

app.delete('/exercises/:id', asyncHandler(async (req, res) => {
  const deleted = await exercises.deleteExercise(req.params.id);
  if (deleted) {
    res.status(204).end();
  } else {
    res.status(404).json({ Error: 'Not Found' });
  }
}));

app.listen(PORT, async () => {
    await exercises.connect()
    console.log(`Server listening on port ${PORT}...`);
});