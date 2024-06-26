import './App.css';
import {useState} from "react";
import Page from './page';
import {createContext} from "react";


function App() {

  const [color, setcolor] = useState('lightgray');

  return(
    <DarkModeContext.Provider value={{color,setcolor}}>
        <Page/>
    </DarkModeContext.Provider>
  )
}


export default App;
export const DarkModeContext = createContext(null);