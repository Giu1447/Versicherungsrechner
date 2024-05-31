import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./Context";

function Vergleich() {
  const [randomFactors] = useState({
    AXA: Math.random() * 2 + 1,
    Mobiliar: Math.random() * 2 + 1,
    TCS: Math.random() * 2 + 1,
  });

  const { preis } = useContext(MyContext);

  const calculatePrice = (company) => {
    const basePrice = preis !== 0 ? preis : 400;
    return (basePrice * randomFactors[company]).toFixed(2);
  };

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
              to="/berechnen"
              className="text-black transition duration-300 relative 
                after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black 
                after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:pd-1
                after:duration-300 after:origin-left"
            >
              Berechnen
            </Link>
          </nav>
        </div>
      </header>


      {preis !== 400 && preis !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full justify-items-center">
          <h1 className="font-bold mb-2 mt-2 text-center text-xl col-span-3">
            Folgende Versicherungen kommen für Sie in Frage:
          </h1>
          <div className="p-4 border rounded-lg shadow-md flex flex-col justify-between items-center w-full sm:w-3/4">
            <div>
              <h2 className="text-xl font-bold mb-2">AXA</h2>
              <p>Schützen Sie Ihr Fahrzeug mit AXA.</p>
              <p>Preis: {calculatePrice('AXA')} CHF</p>
            </div>
            <Link
              to="https://www.axa.ch/de/privatkunden/angebote/fahrzeug-reisen/autoversicherung.html"
              className="mt-4 bg-black-500 text-black rounded-lg hover:bg-black-700
              transition duration-300 self-end relative border-2 border-gray-800 bg-transparent 
              px-4 py-1.5 text-gray-800 transition-colors before:absolute 
              before:left-0 before:top-0 before:-z-10 before:h-full before:w-full 
              before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform 
              before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
              before:rounded-md"
            >
              Mehr erfahren
            </Link>
          </div>

          <div className="p-4 border rounded-lg shadow-md flex flex-col justify-between items-center w-full sm:w-3/4">
            <div>
              <h2 className="text-xl font-bold mb-2">Mobiliar</h2>
              <p>Entdecken Sie die Mobiliar Autoversicherung.</p>
              <p>Preis: {calculatePrice('Mobiliar')} CHF</p>
            </div>
            <Link
              to="https://www.mobiliar.ch/versicherungen-und-vorsorge/fahrzeuge-und-reisen/autoversicherung"
              className="mt-4 bg-black-500 text-black rounded-lg hover:bg-black-700 
              transition duration-300 self-end relative border-2 border-gray-800 bg-transparent 
              px-4 py-1.5 text-gray-800 transition-colors before:absolute 
              before:left-0 before:top-0 before:-z-10 before:h-full before:w-full 
              before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform 
              before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
              before:rounded-md"
            >
              Mehr erfahren
            </Link>
          </div>

          <div className="p-4 border rounded-lg shadow-md flex flex-col justify-between items-center w-full sm:w-3/4">
            <div>
              <h2 className="text-xl font-bold mb-2">TCS</h2>
              <p>Erhalten Sie umfassenden Schutz mit TCS.</p>
              <p>Preis: {calculatePrice('TCS')} CHF</p>
            </div>
            <Link
              to="https://www.tcs.ch/de/produkte/versicherungen-kreditkarten/fahrzeug-versicherungen/auto-versicherung-lieferwagen.php"
              className="mt-4 bg-black-500 text-black rounded-lg hover:bg-black-700 
              transition duration-300 self-end relative border-2 border-gray-800 bg-transparent 
              px-4 py-1.5 text-gray-800 transition-colors before:absolute 
              before:left-0 before:top-0 before:-z-10 before:h-full before:w-full 
              before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform 
              before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
              before:rounded-md"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex flex-col items-center mt-10">
          <div className="text-black text-xl font-bold">
            <h1>Bitte berechnen Sie zuerst Ihre Prämie</h1>
          </div>

          <Link
            to="/berechnen"
            className="mt-4 bg-black-500 text-black rounded-lg hover:bg-black-700 
            transition duration-300 self-center relative border-2 border-gray-800 bg-transparent 
            px-4 py-1.5 text-gray-800 transition-colors before:absolute 
            before:left-0 before:top-0 before:-z-10 before:h-full before:w-full 
            before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform 
            before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
            before:rounded-md"
          >
            Berechnen
          </Link>
        </div>
      )}
    </div>
  );
}

export default Vergleich;
