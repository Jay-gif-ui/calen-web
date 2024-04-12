import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Contents from './Components/Contents/content';
import Info from './Components/Info/info';
import Details from './Components/Details/details';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div>
      <Header />
      <Contents />
      <Info />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
