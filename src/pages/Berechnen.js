import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Berechnung() {
    return (
      <div>
        <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black text-xl font-bold">
            <Link to="/">Giusurance</Link>
          </div>
          <nav className="space-x-8 relative">
            <Link
              to="/versichern"
              className="text-black transition duration-300 relative 
                after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black 
                after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:pd-1
                after:duration-300 after:origin-left"
            >
              Versichern
            </Link>
            <Link
              to="/vergleichen"
              className="text-black transition duration-300 relative 
                after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black 
                after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:pd-1
                after:duration-300 after:origin-left"
            >
              Vergleichen
            </Link>
          </nav>
        </div>
      </header>
      </div>
    );        
}

export default Berechnung;