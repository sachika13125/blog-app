import React from 'react';
import AppRouter from './AppRouter'; 
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;

