import React from 'react';
import AppRouter from './AppRouter'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

