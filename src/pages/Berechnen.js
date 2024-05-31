import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './Context';

function Berechnung() {
  const [schritt, setSchritt] = useState(1);
  const [autoTyp, setAutoTyp] = useState('günstig');
  const [autoAlter, setAutoAlter] = useState('');
  const [autoStandort, setAutoStandort] = useState('garage');
  const [jahresKilometer, setJahresKilometer] = useState('');
  const [fahrerAlter, setFahrerAlter] = useState('');
  const [fuehrerscheinJahre, setFuehrerscheinJahre] = useState('');
  const [versicherungsPraemie, setVersicherungsPraemie] = useState(400);
  const [berechnet, setBerechnet] = useState(false);

  const { setPreis } = useContext(MyContext);

  const handleNext = () => {
    setSchritt(schritt + 1);

    if (schritt === 3) {
      berechnePrämie();
    }
  };

  const handleBack = () => setSchritt(schritt - 1);

  const berechnePrämie = () => {
    let neuePraemie = 400;

    switch (autoTyp) {
      case 'günstig':
        neuePraemie *= 1.0;
        break;
      case 'mittel':
        neuePraemie *= 1.2;
        break;
      case 'teuer':
        neuePraemie *= 1.5;
        break;
      default:
        break;
    }

    if (autoAlter < 3) {
      neuePraemie *= 1.0;
    } else if (autoAlter >= 3 && autoAlter < 10) {
      neuePraemie *= 1.1;
    } else {
      neuePraemie *= 1.2;
    }

    switch (autoStandort) {
      case 'garage':
        neuePraemie *= 1.0;
        break;
      case 'strasse':
        neuePraemie *= 1.2;
        break;
      case 'garstreet':
        neuePraemie *= 1.1;
        break;
      default:
        break;
    }

    if (jahresKilometer < 5000) {
      neuePraemie *= 1.0;
    } else if (jahresKilometer >= 5000 && jahresKilometer < 15000) {
      neuePraemie *= 1.2;
    } else {
      neuePraemie *= 1.5;
    }

    if (fahrerAlter < 25) {
      neuePraemie *= 1.2;
    }

    if (fuehrerscheinJahre < 3) {
      neuePraemie *= 1.2;
    }

    setVersicherungsPraemie(neuePraemie);
    setBerechnet(true);
    setPreis(neuePraemie);
  };

  const renderStep = (schritt) => {
    switch (schritt) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Preis des Autos:</label>
              <select className="w-full p-2 border rounded-md" value={autoTyp} onChange={(e) => setAutoTyp(e.target.value)}>
                <option value="günstig">Günstig</option>
                <option value="mittel">Mittel</option>
                <option value="teuer">Teuer</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Alter des Autos:</label>
              <input type="number" min={0} className="w-full p-2 border rounded-md" value={autoAlter} onChange={(e) => setAutoAlter(e.target.value)} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Wo steht das Auto:</label>
              <select className="w-full p-2 border rounded-md" value={autoStandort} onChange={(e) => setAutoStandort(e.target.value)}>
                <option value="garage">Garage</option>
                <option value="strasse">Strasse</option>
                <option value="garstreet">Garage und Strasse</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Wie viele Kilometer fahren Sie pro Jahr?</label>
              <input type="number" min={0} className="w-full p-2 border rounded-md" value={jahresKilometer} onChange={(e) => setJahresKilometer(e.target.value)} />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Ihr Alter:</label>
              <input type="number" min={18} className="w-full p-2 border rounded-md" value={fahrerAlter} onChange={(e) => setFahrerAlter(e.target.value)} />
            </div>
            <div>
              <label className="block mb-2">Wie lange haben Sie Ihren Führerschein?</label>
              <input type="number" min={0} className="w-full p-2 border rounded-md" value={fuehrerscheinJahre} onChange={(e) => setFuehrerscheinJahre(e.target.value)} />
            </div>
          </div>
        );
      case 4:
        return (
          <div></div>
        );
      default:
        return null;
    }
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

      <div className="container mx-auto p-4 mt-10 rounded-lg w-50vw">
        <div className="text-2xl font-bold mb-4 text-center">Krankenkasseprämie berechnen</div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div onClick={() => setSchritt(1)} className={`rounded-full ${schritt >= 1 ? 'bg-gray-300' : 'bg-black'} w-16 h-16 flex items-center justify-center text-white mb-2 cursor-pointer`}>
              1
            </div>
            <h2 className="text-center">Auto</h2>
          </div>
          <div className="h-[2px] w-20 bg-black mx-4"></div>
          <div className="flex flex-col items-center">
            <div onClick={() => setSchritt(2)} className={`rounded-full ${schritt >= 2 ? 'bg-gray-300' : 'bg-black'} w-16 h-16 flex items-center justify-center text-white mb-2 cursor-pointer`}>
              2
            </div>
            <h2 className="text-center">Details</h2>
          </div>
          <div className="h-[2px] w-20 bg-black mx-4"></div>
          <div className="flex flex-col items-center">
            <div onClick={() => setSchritt(3)} className={`rounded-full ${schritt >= 3 ? 'bg-gray-300' : 'bg-black'} w-16 h-16 flex items-center justify-center text-white mb-2 cursor-pointer`}>
              3
            </div>
            <h2 className="text-center">Person</h2>
          </div>
          <div className="h-[2px] w-20 bg-black mx-4"></div>
          <div className="flex flex-col items-center">
            <div onClick={() => setSchritt(4)} className={`rounded-full ${schritt === 4 ? 'bg-gray-300' : 'bg-black'} w-16 h-16 flex items-center justify-center text-white mb-2 cursor-pointer`}>
              4
            </div>
            <h2 className="text-center">Prämie</h2>
          </div>
        </div>

        <div className="mt-8">
          {renderStep(schritt)}
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handleBack}
            disabled={schritt === 1}
            className="mt-4 bg-black-500 text-black rounded-lg hover:bg-black-700 
            transition duration-300 self-center relative border-2 border-gray-800 bg-transparent 
            px-4 py-1.5 text-gray-800 transition-colors before:absolute 
            before:left-0 before:top-0 before:-z-10 before:h-full before:w-full 
            before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform 
            before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
            before:rounded-md disabled:opacity-50"
          >
            Zurück
          </button>
          {schritt === 4 ? (
            <Link
              to="/vergleichen"
              className="mt-4 bg-black-500 text-black rounded-lg hover:bg-black-700 
            transition duration-300 self-center relative border-2 border-gray-800 bg-transparent 
            px-4 py-1.5 text-gray-800 transition-colors before:absolute 
            before:left-0 before:top-0 before:-z-10 before:h-full before:w-full 
            before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform 
            before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
            before:rounded-md"
            >
              Vergleichen
            </Link>
          ) : (
            <button
              onClick={handleNext}
              className="mt-4 bg-black-500 text-black rounded-lg hover:bg-black-700 
            transition duration-300 self-center relative border-2 border-gray-800 bg-transparent 
            px-4 py-1.5 text-gray-800 transition-colors before:absolute 
            before:left-0 before:top-0 before:-z-10 before:h-full before:w-full 
            before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform 
            before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
            before:rounded-md"
            >
              Weiter
            </button>
          )}
        </div>

        {berechnet && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold">Ihre berechnete Prämie:</h2>
            <p className="text-xl mt-2">{versicherungsPraemie.toFixed(2)} CHF</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Berechnung;
