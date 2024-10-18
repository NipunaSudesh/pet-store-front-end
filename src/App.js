import logo from './logo.svg';
import './App.css';

import { HerrorBanner } from './Components/HerrorBanner';
import { Pet } from './Components/Pet/Pet';
import { BannerTop } from './Components/BannerTop';
import { Product } from './Components/Product/Product';
import { Banner2 } from './Components/Banner2';
import { Banner3 } from './Components/Banner3';
import { Blog } from './Components/Blog/Blog';

function App() {
  return (
    <div className="flex flex-col ">
      <HerrorBanner />
      <Pet />
      <BannerTop />
      <Product />
      <Banner2 />
      <Banner3 />
      <Blog />
    </div>
  );
}

export default App;
