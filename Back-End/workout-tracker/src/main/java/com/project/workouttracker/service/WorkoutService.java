package com.project.workouttracker.service;

import com.project.workouttracker.model.Workout;

import java.util.List;

public interface WorkoutService {

    List<Workout> getAllWorkouts();

    Workout getWorkoutById(Long id);

    Workout createWorkout(Workout workout);

    Workout updateWorkout(Long id, Workout workout);

    void deleteWorkout(Long id);
}

