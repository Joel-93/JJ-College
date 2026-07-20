import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Courses from '../Pages/Courses';
import Departments from '../Pages/Departments';
import Admissions from '../Pages/Admissions';
import Placements from '../Pages/Placements';
import Faculty from '../Pages/Faculty';
import Gallery from '../Pages/Gallery';
import Events from '../Pages/Events';
import Contact from '../Pages/Contact';
import NotFound from '../Pages/NotFound';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/placements" element={<Placements />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;