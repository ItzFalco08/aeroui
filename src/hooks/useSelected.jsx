"use client";
import { createContext, useContext, useState } from 'react';

const SelectedContext = createContext();

export function SelectedProvider({ children }) {
  const [Selected, setSelected] = useState('Getting Started');

  return (
    <SelectedContext.Provider value={{ Selected, setSelected }}>
      {children}
    </SelectedContext.Provider>
  );
}

export function useSelected() {
  const context = useContext(SelectedContext);
  if (!context) {
    throw new Error('useSelected must be used within a SelectedProvider');
  }
  return context;
}