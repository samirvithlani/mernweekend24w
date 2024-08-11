import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Content from "./components/Content";
import { UseStateDemo } from "./components/UseStateDemo";
import { MapWithUseState } from "./components/MapWithUseState";
import { FormDemo1 } from "./components/FormDemo1";

function App() {
  //js

 

  return (
    <div className="App">
      <Header></Header>
      {/* <Content></Content> */}
      {/* <UseStateDemo/> */}
      {/* <MapWithUseState/> */}
      <FormDemo1></FormDemo1>
    </div>
  );
}

export default App;
