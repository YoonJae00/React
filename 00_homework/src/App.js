import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alerttest from "./Alert";
import { useState } from "react";


function App() {
  const [searchText,setsearchText] = useState('')
  return (
    <>
      <Header searchText={searchText}/>
      <Alerttest/>
      <Content searchText={searchText} setsearchText={setsearchText}/>
      <Footer/>
    </>
  );
}

export default App;
