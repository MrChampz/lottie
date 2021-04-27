import { useState } from 'react';
import Lottie from 'react-lottie';
import connectivity from './assets/anims/connectivity.json';
import card from './assets/anims/card.json';
import './App.css';

const App: React.FC = () => {
  const connectivityOptions = {
    loop: true,
    autoplay: true,
    animationData: connectivity,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="app">
      <Lottie
        options={ connectivityOptions }
        width={ 700 }
        height={ 700 }
      />
    </div>
  );
}

export default App;
