// App.jsx

import './App.css';
import ListWorkoutsComponent from './components/ListWorkoutsComponent';
import BMICalculator from './components/BMICalculator';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutComponent from './components/WorkoutComponent';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workouts" element={<ListWorkoutsComponent />} />
          <Route path="/add-workout" element={<WorkoutComponent />} />
          <Route path="/edit-workout/:id" element={<WorkoutComponent />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
