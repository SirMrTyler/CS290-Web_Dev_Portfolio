// Assignment 9 - Exercise Tracker API
// Author: Tyler Klein (OSU ID: 935-652-283)
// Date: 2025-05-20
// Course: CS 290 Section 400
// Description: This model defines the schema for exercises and provides
//              functions to interact with MongoDB via Mongoose.

import mongoose from 'mongoose';
import 'dotenv/config';
// ----- Database Configuration ---------------------------------------------

// Name of the MongoDB database to use
const EXERCISE_DB_NAME = 'exercise_db';
// If you want to CRUD my personal database, uncomment the line below and comment the above line
// const EXERCISE_DB_NAME = 'myPersonalExercises_db';

// Schema defining an exercise document
const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true, min: 1 },
  weight: { type: Number, required: true, min: 1 },
  unit: { type: String, required: true, enum: ['kgs', 'lbs'] },
  date: { type: String, required: true }
});

// Mongoose model for interacting with the exercises collection
const Exercise = mongoose.model('Exercise', exerciseSchema);

// Connect to MongoDB using the connection string in .env
async function connect() {
  await mongoose.connect(process.env.MONGODB_CONNECT_STRING, { dbName: EXERCISE_DB_NAME });
  console.log('Successfully connected to MongoDB using Mongoose!');
}

// Insert a new exercise document into the database
async function createExercise(data) {
  return Exercise.create(data);
}

// Read all exercise documents from the database
async function getAllExercises() {
  return Exercise.find().lean();
}

// Read a single exerciste document by its MongoDB ID
async function getExerciseById(id) {
  return Exercise.findById(id).lean();
}

// Update an existing exercise document by its MongoDB ID
async function updateExercise(id, data) {
  return Exercise.findByIdAndUpdate(id, data, { new: true }).lean();
}

// Delete an exercise document by its MongoDB ID
async function deleteExercise(id) {
  return Exercise.findByIdAndDelete(id).lean();
}

// Export all functions for use in the controller
export { 
    connect, 
    createExercise, 
    getAllExercises, 
    getExerciseById, 
    updateExercise, 
    deleteExercise
};