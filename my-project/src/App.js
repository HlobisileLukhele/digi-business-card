import Header from "./Components/Header"
import './App.css';
import Button from "./Components/Button"
import About from "./Components/About"
import Interest from "./Components/Interest"
import Hlobisile from "./Hlobisile.png"
function App() {
  return (
    <div className="App bg-black">
      <img src={Hlobisile} className="Head-shot" alt="me-smiling " />
        <Header />
       <Button />
       <About />
       <Interest />

    </div>
  );
}

export default App;
