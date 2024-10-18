import logo from './logo.svg';
import './App.css';

import { HerrorBanner } from './Components/HerrorBanner';
import { Pet } from './Components/Pet/Pet';
import { BannerTop } from './Components/BannerTop';
import { Product } from './Components/Product/Product';

function App() {
  return (
    <div className="flex flex-col ">
      <HerrorBanner />
      <Pet />
      <BannerTop />
      <Product />
    </div>
  );
}

export default App;
