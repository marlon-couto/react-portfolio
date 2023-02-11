import React, { useState } from 'react';

import PortfolioHead from '../components/PortfolioHead';
import MainContent from '../components/MainContent';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <PortfolioHead />
      <MainContent darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
