import logo from './logo.svg';
import './App.css';

import { HerrorBanner } from './Components/HerrorBanner';
import { Pet } from './Components/Pet';

function App() {
  return (
    <div className="flex flex-col ">
      <HerrorBanner />
      <Pet />
    </div>
  );
}

export default App;
