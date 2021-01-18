import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Story from './components/story'

function App() {
  AOS.init();
  return (
    <div className="App">
      <Home/>
      <Nav/>

      <About/>
      <Story/>
    </div>
  );
}

export default App;
