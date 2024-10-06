package com.project.workouttracker.service.impl;

import com.project.workouttracker.exception.ResourceNotFoundException;
import com.project.workouttracker.model.Workout;
import com.project.workouttracker.repository.WorkoutRepository;
import com.project.workouttracker.service.WorkoutService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutServiceImpl implements WorkoutService {

    @Autowired
    private WorkoutRepository workoutRepository;

    @Override
    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    @Override
    public Workout getWorkoutById(Long id) {
        return workoutRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Workout not found"));
    }

    @Override
    public Workout createWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    @Override
    public Workout updateWorkout(Long id, Workout updatedWorkout) {
        return workoutRepository.findById(id)
                .map(workout -> {
                    workout.setDate(updatedWorkout.getDate());
                    workout.setTime(updatedWorkout.getTime());
                    workout.setDuration(updatedWorkout.getDuration());
                    workout.getExercises().clear();
                    workout.getExercises().addAll(updatedWorkout.getExercises());
                    return workoutRepository.save(workout);
                })
                .orElseThrow(() -> new ResourceNotFoundException("Workout not found"));
    }

    @Override
    public void deleteWorkout(Long id) {
        workoutRepository.deleteById(id);
    }
}

