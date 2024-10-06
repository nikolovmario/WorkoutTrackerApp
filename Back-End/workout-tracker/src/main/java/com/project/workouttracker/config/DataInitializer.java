package com.project.workouttracker.config;

import com.project.workouttracker.model.Exercise;
import com.project.workouttracker.model.Workout;
import com.project.workouttracker.repository.WorkoutRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private WorkoutRepository workoutRepository;

    @Override
    public void run(String... args) throws Exception {

        // Workout 1 - Upper Body
        Workout workout1 = new Workout();
        workout1.setDate(LocalDate.of(2024, 10, 1));
        workout1.setTime("08:00");
        workout1.setDuration(60);

        Exercise exercise1 = new Exercise();
        exercise1.setName("Bench Press");
        exercise1.setSets(4);
        exercise1.setReps(10);
        exercise1.setWeight(70);

        Exercise exercise2 = new Exercise();
        exercise2.setName("Dumbbell Rows");
        exercise2.setSets(4);
        exercise2.setReps(12);
        exercise2.setWeight(30);

        workout1.setExercises(Arrays.asList(exercise1, exercise2));
        workoutRepository.save(workout1);

        // Workout 2 - Lower Body
        Workout workout2 = new Workout();
        workout2.setDate(LocalDate.of(2024, 10, 2));
        workout2.setTime("08:00");
        workout2.setDuration(60);

        Exercise exercise3 = new Exercise();
        exercise3.setName("Squats");
        exercise3.setSets(4);
        exercise3.setReps(12);
        exercise3.setWeight(80);

        Exercise exercise4 = new Exercise();
        exercise4.setName("Lunges");
        exercise4.setSets(4);
        exercise4.setReps(10);
        exercise4.setWeight(40);

        workout2.setExercises(Arrays.asList(exercise3, exercise4));
        workoutRepository.save(workout2);

        // Workout 3 - Upper Body
        Workout workout3 = new Workout();
        workout3.setDate(LocalDate.of(2024, 10, 3));
        workout3.setTime("08:00");
        workout3.setDuration(60);

        Exercise exercise5 = new Exercise();
        exercise5.setName("Overhead Press");
        exercise5.setSets(4);
        exercise5.setReps(10);
        exercise5.setWeight(60);

        Exercise exercise6 = new Exercise();
        exercise6.setName("Pull-ups");
        exercise6.setSets(4);
        exercise6.setReps(8);

        workout3.setExercises(Arrays.asList(exercise5, exercise6));
        workoutRepository.save(workout3);

        // Workout 4 - Lower Body
        Workout workout4 = new Workout();
        workout4.setDate(LocalDate.of(2024, 10, 4));
        workout4.setTime("08:00");
        workout4.setDuration(60);

        Exercise exercise7 = new Exercise();
        exercise7.setName("Deadlift");
        exercise7.setSets(4);
        exercise7.setReps(8);
        exercise7.setWeight(100);

        Exercise exercise8 = new Exercise();
        exercise8.setName("Leg Press");
        exercise8.setSets(4);
        exercise8.setReps(10);
        exercise8.setWeight(120);

        workout4.setExercises(Arrays.asList(exercise7, exercise8));
        workoutRepository.save(workout4);

        // Workout 5 - Upper Body
        Workout workout5 = new Workout();
        workout5.setDate(LocalDate.of(2024, 10, 5));
        workout5.setTime("08:00");
        workout5.setDuration(60);

        Exercise exercise9 = new Exercise();
        exercise9.setName("Incline Bench Press");
        exercise9.setSets(4);
        exercise9.setReps(10);
        exercise9.setWeight(65);

        Exercise exercise10 = new Exercise();
        exercise10.setName("Dumbbell Flyes");
        exercise10.setSets(4);
        exercise10.setReps(12);
        exercise10.setWeight(25);

        workout5.setExercises(Arrays.asList(exercise9, exercise10));
        workoutRepository.save(workout5);

        // Workout 6 - Lower Body
        Workout workout6 = new Workout();
        workout6.setDate(LocalDate.of(2024, 10, 6));
        workout6.setTime("08:00");
        workout6.setDuration(60);

        Exercise exercise11 = new Exercise();
        exercise11.setName("Leg Curls");
        exercise11.setSets(4);
        exercise11.setReps(12);
        exercise11.setWeight(50);

        Exercise exercise12 = new Exercise();
        exercise12.setName("Calf Raises");
        exercise12.setSets(4);
        exercise12.setReps(15);
        exercise12.setWeight(30);

        workout6.setExercises(Arrays.asList(exercise11, exercise12));
        workoutRepository.save(workout6);

        // Workout 7 - Upper Body
        Workout workout7 = new Workout();
        workout7.setDate(LocalDate.of(2024, 10, 7));
        workout7.setTime("08:00");
        workout7.setDuration(60);

        Exercise exercise13 = new Exercise();
        exercise13.setName("Push-ups");
        exercise13.setSets(4);
        exercise13.setReps(15);

        Exercise exercise14 = new Exercise();
        exercise14.setName("Dumbbell Shoulder Press");
        exercise14.setSets(4);
        exercise14.setReps(12);
        exercise14.setWeight(40);

        workout7.setExercises(Arrays.asList(exercise13, exercise14));
        workoutRepository.save(workout7);

        System.out.println("Sample data initialized.");
    }
}
