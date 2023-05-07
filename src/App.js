import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Features from './Components/Features/Features';
import Articles from './Components/Articles/Articles';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <Features />
      <Articles />
      <Footer />
      
    </div>
  );
}

export default App;
