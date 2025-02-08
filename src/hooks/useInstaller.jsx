"use client";
import { createContext, useContext, useState } from 'react';

const InstallerContext = createContext();

export function InstallerProvider({ children }) {
  const [Installer, setInstaller] = useState('npm');

  return (
    <InstallerContext.Provider value={{ Installer, setInstaller }}>
      {children}
    </InstallerContext.Provider>
  );
}

export function useInstaller() {
  const context = useContext(InstallerContext);
  if (!context) {
    throw new Error('useInstaller must be used within a InstallerProvider');
  }
  return context;
}