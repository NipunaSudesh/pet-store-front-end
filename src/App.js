import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Category/Home';

// import { HerrorBanner } from './Components/HomePage/HerrorBanner';
// import { Pet } from './Components/HomePage/Pet/Pet';
// import { BannerTop } from './Components/HomePage/BannerTop';
// import { Product } from './Components/HomePage/Product/Product';
// import { Banner2 } from './Components/HomePage/Banner2';
// import { Banner3 } from './Components/HomePage/Banner3';
// import { Blog } from './Components/HomePage/Blog/Blog';
// import { Footer } from './Components/HomePage/Footer';

function App() {
  return (
    <div className="flex flex-col ">
      {/* <HerrorBanner />
      <Pet />
      <BannerTop />
      <Product />
      <Banner2 />
      <Banner3 />
      <Blog />
      <Footer /> */}
      <Home />
    </div>
  );
}

export default App;
