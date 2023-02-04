import React from 'react';

import MainSection from './MainSection';
import CardSection from './CardSection';
import ProjectSection from './ProjectSection';

export default function MainContent({ darkMode, setDarkMode }) {
  return (
    <main className="bg-neutral-100 text-gray-900 px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-neutral-100">
      <MainSection darkMode={darkMode} setDarkMode={setDarkMode} />
      <CardSection />
      <ProjectSection />
    </main>
  );
}
