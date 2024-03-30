import './css/style.css';
import BtnTopo from './components/btn_topo';
import MenuMobile from './components/menu_mobile';
import FooterPage from './components/footer';
import BannerPage from './components/banner_page';
import About from './components/about';
import Project from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <BtnTopo />
      <MenuMobile />

      <main className="page">
        <BannerPage />
        <About />
        <Project />
        <Contact />
      </main>

      <FooterPage />
    </div>
  );
}

export default App;