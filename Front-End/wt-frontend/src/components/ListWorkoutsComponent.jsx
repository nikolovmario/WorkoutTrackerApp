import React, { useEffect, useState } from "react";
import { listWorkouts, deleteWorkout } from "../services/WorkoutService"; 
import { FaRunning, FaDumbbell, FaEdit, FaTrash } from "react-icons/fa";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import "./ListWorkoutsComponent.css"; 

const ListWorkoutsComponent = () => {
  const [workouts, setWorkouts] = useState([]);
  const [expandedWorkoutId, setExpandedWorkoutId] = useState(null); 
  const navigate = useNavigate(); 

  useEffect(() => {
    getAllWorkouts();
  }, []);

  function getAllWorkouts() {
    listWorkouts()
      .then((response) => {
        const sortedWorkouts = response.data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date); 
        });
        setWorkouts(sortedWorkouts);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
  function toggleWorkoutDetails(workoutId) {
    setExpandedWorkoutId(expandedWorkoutId === workoutId ? null : workoutId);
  }

  
  function handleDelete(workoutId) {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      deleteWorkout(workoutId)
        .then(() => {
          getAllWorkouts(); 
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  
  function handleAddWorkout() {
    navigate("/add-workout");
  }

  
  function handleEditWorkout(workoutId) {
    navigate(`/edit-workout/${workoutId}`);
  }

  return (
    <div className="container timeline">
      <h2 className="text-center mb-4">Workout History</h2>

      {}
      <div className="text-end mb-4">
        <Button onClick={handleAddWorkout} className="add-workout-btn">
          Add Workout
        </Button>
      </div>

      <ul className="timeline-list">
        {workouts.map((workout) => (
          <li key={workout.id} className="timeline-item">
            <Card className="workout-card">
              <Card.Body>
                <div className="timeline-item-header">
                  <div className="workout-time">
                    <FaRunning className="icon" /> {workout.date} at {workout.time}
                  </div>
                  <div className="workout-duration">
                    Duration: {workout.duration} minutes
                  </div>

                  <div className="action-buttons">
                    <Button
                      variant="link"
                      className="details-btn"
                      onClick={() => toggleWorkoutDetails(workout.id)}
                    >
                      {expandedWorkoutId === workout.id ? "Hide Details" : "View Details"}
                    </Button>
                    <Button
                      className="edit-btn"
                      onClick={() => handleEditWorkout(workout.id)}
                    >
                      <FaEdit /> Edit
                    </Button>
                    <Button
                      className="delete-btn"
                      onClick={() => handleDelete(workout.id)}
                    >
                      <FaTrash /> Delete
                    </Button>
                  </div>
                </div>

                {expandedWorkoutId === workout.id && (
                  <div className="workout-details">
                    <h5>Exercises:</h5>
                    <ul>
                      {workout.exercises.map((exercise, index) => (
                        <li key={index}>
                          <FaDumbbell /> {exercise.name} - {exercise.reps} reps, {exercise.sets} sets, {exercise.weight} kg
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListWorkoutsComponent;
