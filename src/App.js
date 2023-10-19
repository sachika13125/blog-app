import React from 'react';
import AppRouter from './AppRouter'; 
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;

