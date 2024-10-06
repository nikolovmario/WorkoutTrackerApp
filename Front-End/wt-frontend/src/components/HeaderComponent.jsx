import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-brand'>Workout Tracker</Link>
            <div className='navbar-buttons'>
              <Link to='/workouts' className='btn btn-outline-light'>Workouts</Link>
              <Link to='/bmi-calculator' className='btn btn-outline-light' style={{ marginLeft: '10px' }}>BMI</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default HeaderComponent;
