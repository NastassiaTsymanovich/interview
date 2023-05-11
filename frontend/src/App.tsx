import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import './App.css';
import GalleryPage from './pages/GaleryPage';

function App() {
  return (
    <div className="App">
      <SkeletonTheme>
        <GalleryPage />
      </SkeletonTheme>
    </div>
  );
}

export default App;
