import React, { createContext, useContext, useState } from 'react';

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookContextProvider = ({ children }) => {
  const [bookTitle, setBookTitle] = useState('');

  return (
    <BookContext.Provider value={{ bookTitle, setBookTitle }}>
      {children}
    </BookContext.Provider>
  );
};
