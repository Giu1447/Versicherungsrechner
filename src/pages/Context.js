import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [preis, setPreis] = useState(400);

  return (
    <MyContext.Provider value={{ preis, setPreis }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
