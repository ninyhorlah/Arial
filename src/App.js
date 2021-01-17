import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';

function App() {
  AOS.init();
  return (
    <div className="App">
      {/* <img src="/assets/img/bride.jpg" alt=""/> */}
      {/* <Home/> */}
      <Nav/>

      <About/>
    </div>
  );
}

export default App;
