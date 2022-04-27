import Header from './components/Header';
import Location from './components/Sections/Location';
import Crew from './components/Sections/Crew';
import Footer from './components/Footer';
import FunFacts from './components/Sections/FunFacts';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Location />
      <Crew />
      <FunFacts />
      <Footer />
    </div>
  );
}

export default App;
