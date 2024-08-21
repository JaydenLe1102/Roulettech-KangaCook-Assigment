//import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Recipes from './pages/recipes';
import AddRecipe from './pages/add_recipe';
import MenuBar from './components/menuBar';

import './App.css'

function App() {

  return (
    <Router>
    <MenuBar />
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/add_recipe" element={<AddRecipe />} />
    </Routes>
  </Router>
  )
}

export default App
