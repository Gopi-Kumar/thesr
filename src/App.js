
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import Client from './components/Client/Client'
import MessageForm from './components/Message/MessageForm'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <Client/>
      <MessageForm/>
      <Footer/>

      
    </div>
  );
}

export default App;
