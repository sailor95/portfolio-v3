import React from 'react';

import './App.scss';
import LandingSection from '../sections/landing/LandingSection';
import WorksSction from '../sections/works/WorksSection';

const App = () => {
  return (
    <div className="app container-fluid">
      <LandingSection />
      <WorksSction />
    </div>
  );
};

export default App;
