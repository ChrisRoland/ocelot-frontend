import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Link, Outlet  } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import Service from './components/Service';
import Navbar from './components/Navbar';
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {

	return (
		<BrowserRouter>
			{/* Navigation */}
			<Navbar />

			<div className='pt-20'>
				<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Service />} />
				<Route path="/projects" element={<Project />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			</div>

			<ScrollToTopButton />
			
				
		</BrowserRouter>
	);
 
}

export default App
