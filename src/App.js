
import './App.css';
import CardList from './cards';
import Footer from './footer';
import Logo from './logo';

function App() {
  return (
    <div className="App">
      <Logo /> 
      <h1 className='app-title'>WELCOME TO KNLS LINKS</h1> 

      <div className='space-between'></div>
      <CardList /> 
      <div className='space-between2'></div>

      <Footer />
    </div>
  );
}

export default App;
