import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="navigation_bar">
        <Navigation />
        <Header />
      </div>
    </div>
  );
}
export default App;
