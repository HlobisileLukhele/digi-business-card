import Header from "./Components/Header"
import './App.css';
import Button from "./Components/Button"
import About from "./Components/About"
import Interest from "./Components/Interest"


function App() {
  return (
    <div className="App bg-black">
    <img src="../images/head-shot.png" alt="myself smiling" />
      <Header />
       <Button />
       <About />
       <Interest />

        
    </div>
  );
}

export default App;
