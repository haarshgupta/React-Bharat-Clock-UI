import BharatTime from "./components.jsx/BharatTime";
import Heading from "./components.jsx/Heading";
import Slogan from "./components.jsx/Slogan";
import "./App.css";

function App() {
  return (
    <center>
      <Heading></Heading>
      <div class="mainBody">
      <Slogan></Slogan>
      <BharatTime></BharatTime>
      </div>
    </center>
  );
}

export default App;
