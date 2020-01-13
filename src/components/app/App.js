import React from 'react';

import './App.scss';
import LandingSection from '../sections/landing/LandingSection';
import WorksSection from '../sections/works/WorksSection';

const App = () => {
  return (
    <div className="app container-fluid">
      <LandingSection />
      <WorksSection />
    </div>
  );
};

export default App;
