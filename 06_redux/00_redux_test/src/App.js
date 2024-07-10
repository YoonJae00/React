import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/Regist";
import Content from "./pages/Content";
import Update from "./components/Update";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route index element={<Content/>}></Route>
        <Route path="/list" element={<h2>g2ㅎ2</h2>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/regist" element={<SignUp/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/*" element={<h1>404 Error</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
