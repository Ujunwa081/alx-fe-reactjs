import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      
      {/* UserProfile component usage */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Enjoys painting and cooking" />

      <Footer />
    </div>
  );
}

export default App;
