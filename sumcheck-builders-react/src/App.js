import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import UpcomingTalks from './components/UpcomingTalks';
import PastTalks from './components/PastTalks';
import Resources from './components/Resources';
import Footer from './components/Footer';
import TalkPage from './components/TalkPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming" element={<UpcomingTalks />} />
            <Route path="/past" element={<PastTalks />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/talks/:talkId" element={<TalkPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
