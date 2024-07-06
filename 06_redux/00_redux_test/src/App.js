import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/Regist";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route index element={<h1>기본화면</h1>}></Route>
        <Route path="/list" element={<h2>g2ㅎ2</h2>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/regist" element={<SignUp/>}/>
        <Route path="/*" element={<h1>404 Error</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
