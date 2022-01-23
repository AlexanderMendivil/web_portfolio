import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { About } from './Pages/About';
import { Hobbies } from './Pages/Hobbies';
import { Contact } from './Pages/Contact';
import { MySkills } from './Pages/MySkills';
import Layout from './Pages/Layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="About" element={<About/>}/>
            <Route path="Hobbies" element={<Hobbies/>}/>
            <Route  path="Contact" element={<Contact/>}/>
            <Route  path="Skills" element={<MySkills/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
