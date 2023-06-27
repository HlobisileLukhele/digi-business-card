import './App.css';
import Header from "./Components/Header"
import Button from "./Components/Button"
import About from "./Components/About"
import Interest from "./Components/Interest"
import Hlobisile from "./Hlobisile.png"
import Footer from "./Components/Footer"
import Icons from "./Components/Icons"


function App() {
  return (
    <div className="Card">
     
      <img src={Hlobisile} className="Head-shot" alt="me-smiling " />
       <Header />
       <Button />
       <About />
       <Interest />
       <Icons />
       <Footer />

    </div>
  );
}

export default App;
