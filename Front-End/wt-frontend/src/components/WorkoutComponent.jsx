import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createWorkout, updateWorkout, getWorkout } from '../services/WorkoutService';
import './WorkoutComponent.css'; 

const WorkoutComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [time, setTime] = useState('');
  const [exercises, setExercises] = useState([{ name: '', reps: '', sets: '', weight: '' }]);

  useEffect(() => {
    if (id) {
      getWorkout(id).then((response) => {
        const workout = response.data;
        setDate(workout.date);
        setDuration(workout.duration);
        setTime(workout.time);
        setExercises(workout.exercises);
      }).catch(error => console.error(error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const workout = { date, duration, time, exercises };

    if (id) {
      updateWorkout(id, workout).then(() => {
        navigate('/workouts');
      }).catch(error => console.error(error));
    } else {
      createWorkout(workout).then(() => {
        navigate('/workouts');
      }).catch(error => console.error(error));
    }
  };

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = [...exercises];
    updatedExercises[index][field] = value;
    setExercises(updatedExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, { name: '', reps: '', sets: '', weight: '' }]);
  };

  const removeExercise = (index) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
    setExercises(updatedExercises);
  };

  return (
    <div className="workout-container">
      <form onSubmit={handleSubmit} className="workout-form">
        <div className="form-group">
          <label>Date</label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Duration (minutes)</label>
          <input type="number" className="form-control" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Time</label>
          <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>

        <h4 className="exercise-title">Exercises</h4>
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-input-group">
            <input type="text" placeholder="Exercise Name" className="form-control" value={exercise.name} onChange={(e) => handleExerciseChange(index, 'name', e.target.value)} />
            <input type="number" placeholder="Reps" className="form-control" value={exercise.reps} onChange={(e) => handleExerciseChange(index, 'reps', e.target.value)} />
            <input type="number" placeholder="Sets" className="form-control" value={exercise.sets} onChange={(e) => handleExerciseChange(index, 'sets', e.target.value)} />
            <input type="number" placeholder="Weight (kg)" className="form-control" value={exercise.weight} onChange={(e) => handleExerciseChange(index, 'weight', e.target.value)} />
            <button type="button" className="btn btn-danger remove-btn" onClick={() => removeExercise(index)}>Remove</button>
          </div>
        ))}

        <div className="button-group">
          <button type="button" className="btn btn-secondary add-exercise-btn" onClick={addExercise}>Add Exercise</button>
          <button type="submit" className="btn btn-success submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutComponent;
