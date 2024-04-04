import './App.css';
import About from './components/About';
// import EventImages from './components/EventImages';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {

  
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Services />
{/* <EventImages/> */}
      <Footer />
    </>
  );
}

export default App;
