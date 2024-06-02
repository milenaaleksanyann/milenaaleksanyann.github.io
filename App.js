import './App.scss';
import Footer from './Components/Footer/Footer';
import HeaderContent from './Components/Header/HeaderContent/HeaderContent';
import MainContent from './Components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
     <HeaderContent/>
     <MainContent/>
     <Footer/>
    </div>
  );
}

export default App;
