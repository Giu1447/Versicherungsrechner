import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Versichern from './components/Versichern';
import Berechnung from './components/Berechnen';
import Vergleich from './components/Vergleich';

function Layout() {
  return (
    <div>
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-xl font-bold">
            <Link to="/">Giusurance</Link>
          </div>
          <nav className="space-x-8 relative">
            <Link to="/versichern" 
              className="text-black transition duration-300 relative 
              after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black 
              after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:pd-1
              after:duration-300 after:origin-left">
              Versichern
            </Link>
            <Link to="/berechnen" 
              className="text-black transition duration-300 relative 
              after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black 
              after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:pd-1
              after:duration-300 after:origin-left">
              Berechnen
            </Link>
            <Link to="/vergleichen" 
              className="text-black transition duration-300 relative 
              after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black 
              after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:pd-1
              after:duration-300 after:origin-left">
              Vergleichen
            </Link>
          </nav>
        </div>
      </header>

      <div id="content" className="container mx-auto p-4 justifiy-items-center">
        <div id='picture' className='relative h-50vh'>
          <img 
            src='https://cdn.pixabay.com/photo/2016/12/12/15/30/dodge-charger-1901806_1280.jpg' 
            alt='placeholder' 
            className='w-full h-full object-cover'
          />
          <Link to="/berechnen" 
          className='absolute top-3/4 left-1/2 
          transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-lg border-gray-300
          bg-gray-300 px-5 py-2.5 font-medium text-black transition-colors 
          before:absolute before:left-0 before:top-0 before:-z-10 before:h-full 
          before:w-full before:origin-top-left before:scale-x-0 before:bg-black 
          before:transition-transform before:duration-300 before:content-[""] hover:text-white 
          before:hover:scale-x-100 before:rounded-md'>
          Zur Berechnung
        </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 mt-8 flex-auto h-35vh">
          <div></div>

          <div className="p-4 border rounded-lg shadow-md flex flex-col justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Versichern</h2>
              <p>Jeztz die günstigste Versicherung abschliessen.</p>
            </div>
            <Link 
              to="/versichern" 
              className='mt-4 bg-black-500 text-black rounded-lg hover:bg-black-700
              transition duration-300 self-end relative border-2 border-gray-800 bg-transparent 
              px-4 py-1.5 text-gray-800 transition-colors before:absolute 
              before:left-0 before:top-0 before:-z-10 before:h-full before:w-full 
              before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform 
              before:duration-300 before:content-[""] hover:text-white before:hover:scale-x-100 
              before:rounded-md'
            >
              Mehr erfahren
            </Link>
          </div>

          <div></div>

          <div className="p-4 border rounded-lg shadow-md flex flex-col justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Berechnen</h2>
              <p>Berechnen Sie Ihre Versicherungsprämien.</p>
            </div>
            <Link 
              to="/berechnen" 
              className='mt-4 bg-black-500 text-black rounded-lg hover:bg-black-700 
              transition duration-300 self-end relative border-2 border-gray-800 bg-transparent 
              px-4 py-1.5 text-gray-800 transition-colors before:absolute 
              before:left-0 before:top-0 before:-z-10 before:h-full before:w-full 
              before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform 
              before:duration-300 before:content-[""] hover:text-white before:hover:scale-x-100 
              before:rounded-md'
            >
              Mehr erfahren
            </Link>
          </div>

          <div></div>

          <div className="p-4 border rounded-lg shadow-md flex flex-col justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Vergleichen</h2>
              <p>Vergleichen Sie verschiedene Versicherungsangebote.</p>
            </div>
            <Link 
              to="/vergleichen" 
              className='mt-4 bg-black-500 text-black rounded-lg hover:bg-black-700 
              transition duration-300 self-end relative border-2 border-gray-800 bg-transparent 
              px-4 py-1.5 text-gray-800 transition-colors before:absolute 
              before:left-0 before:top-0 before:-z-10 before:h-full before:w-full 
              before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform 
              before:duration-300 before:content-[""] hover:text-white before:hover:scale-x-100 
              before:rounded-md'
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/versichern" element={<Versichern />} />
          <Route path="/berechnen" element={<Berechnung />} />
          <Route path="/vergleichen" element={<Vergleich />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
