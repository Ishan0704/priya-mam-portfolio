import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';

const App =() =>{
  return (
    <>
      <Header />
      <main className="main">
        <Home/>
        <About/>
        <Qualification/>
        <Work/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App;
