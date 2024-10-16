import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Content from "./components/Content";
import { UseStateDemo } from "./components/UseStateDemo";
import { MapWithUseState } from "./components/MapWithUseState";
import { FormDemo1 } from "./components/FormDemo1";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./netflix/NetflixHome";
import { NetflixMovies } from "./netflix/NetflixMovies";
import { NetflixShows } from "./netflix/NetflixShows";
import { Error404 } from "./components/Error404";
import { PlayShow } from "./netflix/PlayShow";
import { FormDemo2 } from "./forms/FormDemo2";
import { FormDemo3 } from "./forms/FormDemo3";
import { ApiDemo1 } from "./api/ApiDemo1";
import { OmdbApi } from "./api/OmdbApi";
import { UpdateUser } from "./api/UpdateUser";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { ApiDemo2 } from "./api/ApiDemo2";
import { ApiRev1 } from "./api/ApiRev1";
import { ApiRev2 } from "./api/ApiRev2";
import { CreateUser } from "./api/CreateUser";
import { Employees } from "./components/Employees";

function App() {
  //js

 

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element = {<h1>HOME PAGE</h1>}></Route>
        <Route path="/netflixhome" element={<NetflixHome/>}></Route>
        <Route path="/netflixmovies" element = {<NetflixMovies/>}></Route>
        <Route path = "/netflixshows" element = {<NetflixShows/>}></Route>
        <Route path = "/netflixshows/playshow/:id" element = {<PlayShow/>}></Route>
        <Route path = "/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path = "/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path ="/apidemo1" element ={<ApiDemo1/>}></Route>
        <Route path = "/omdb" element = {<OmdbApi/>}></Route>
        <Route path ="/updateuser/:id" element = {<UpdateUser/>}></Route>
        <Route path = "/useeffect" element = {<UseEffectDemo/>}></Route>
        <Route path="/apidemo2" element={<ApiDemo2/>}></Route>
        <Route path="/apirev" element ={<ApiRev1/>}></Route>
        <Route path="/apirev2" element ={<ApiRev2/>}></Route>
        <Route path="/createuser" element ={<CreateUser/>}></Route>
        <Route path = "/employees" element ={<Employees/>}></Route>
        {/* <Route path = "/*" element = {<h1>404 NOT FOUND</h1>}></Route> */}
        <Route path = "/*" element  ={<Error404/>}></Route>
      </Routes>
      {/* <Content></Content> */}
      {/* <UseStateDemo/> */}
      {/* <MapWithUseState/> */}
      {/* <FormDemo1></FormDemo1> */}
    </div>
  );
}

export default App;
