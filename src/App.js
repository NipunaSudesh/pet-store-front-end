import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { HerrorBanner } from './Components/HerrorBanner';

function App() {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <HerrorBanner />
    </div>
  );
}

export default App;
