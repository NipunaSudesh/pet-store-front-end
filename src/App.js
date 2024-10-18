import logo from './logo.svg';
import './App.css';

import { HerrorBanner } from './Components/HerrorBanner';
import { Pet } from './Components/Pet/Pet';
import { BannerTop } from './Components/BannerTop';
import { Product } from './Components/Product/Product';
import { Banner2 } from './Components/Banner2';

function App() {
  return (
    <div className="flex flex-col ">
      <HerrorBanner />
      <Pet />
      <BannerTop />
      <Product />
      <Banner2 />
    </div>
  );
}

export default App;
