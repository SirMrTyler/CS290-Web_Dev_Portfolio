// Assignment 9 - Exercise Tracker API
// Author: Tyler Klein (OSU ID: 935-652-283)
// Date: 2025-05-20
// Course: CS 290 Section 400
// Description: This model defines the schema for exercises and provides
//              functions to interact with MongoDB via Mongoose.

import mongoose from 'mongoose';
import 'dotenv/config';

const EXERCISE_DB_NAME = 'exercise_db';

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true, min: 1 },
  weight: { type: Number, required: true, min: 1 },
  unit: { type: String, required: true, enum: ['kgs', 'lbs'] },
  date: { type: String, required: true }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

async function connect() {
  await mongoose.connect(process.env.MONGODB_CONNECT_STRING, { dbName: EXERCISE_DB_NAME });
  console.log('Successfully connected to MongoDB using Mongoose!');
}

async function createExercise(data) {
  return Exercise.create(data);
}

async function getAllExercises() {
  return Exercise.find().lean();
}

async function getExerciseById(id) {
  return Exercise.findById(id).lean();
}

async function updateExercise(id, data) {
  return Exercise.findByIdAndUpdate(id, data, { new: true }).lean();
}

async function deleteExercise(id) {
  return Exercise.findByIdAndDelete(id).lean();
}

export { 
    connect, 
    createExercise, 
    getAllExercises, 
    getExerciseById, 
    updateExercise, 
    deleteExercise
};