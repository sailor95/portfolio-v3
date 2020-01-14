import React from 'react';

import './App.scss';
import LandingSection from '../sections/landing/LandingSection';
import WorksSection from '../sections/works/WorksSection';
import FooterSection from '../sections/footer/FooterSection';

const App = () => {
  return (
    <div>
      <div className="app container-fluid">
        <LandingSection />
        <WorksSection />
      </div>

      <FooterSection />
    </div>
  );
};

export default App;
