import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeComponent.css'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className='home-container'>
      <h1>Welcome to the Workout Tracker</h1>
      <p>Track your workouts and calculate your BMI to stay fit and healthy!</p>

      {/* Button container to hold the buttons side by side */}
      <div className='button-container'>
        <button className='btn btn-primary' onClick={() => navigate('/workouts')}>
          View Workouts
        </button>
        <button className='btn btn-secondary' onClick={() => navigate('/bmi-calculator')}>
          BMI Calculator
        </button>
      </div>
    </div>
  )
}

export default HomePage
