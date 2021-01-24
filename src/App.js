import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Story from './components/story'
import Important from './components/important';
import Portfolio from './components/portfolio';
import Guest from './components/guest' ;
import Registry from './components/registry'
import Footer from './components/footer';
// import Button from './components/button';
// import { MapContainer } from './components/map';

function App() {
  AOS.init();
  return (
    <div className="App">
      <Home/>
      {/* <Button/> */}
      <Nav/>

      <About/>
      <Story/>
      <Important/>
      <Portfolio/>
      <Guest/>
      {/* <MapContainer/> */}
      <Registry/>
      <Footer/>
    </div>
  );
}

export default App;
