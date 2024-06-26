import { DarkModeContext } from "./App";
import {useContext} from "react";

function Header() {

    const context = useContext(DarkModeContext);


    const {color} = context;

    const style = {
        backgroundColor : color,
        color : "black"
    }
    return(
        <header className="header" style={style}>
            <h1>Header 영역 입니다.</h1>
        </header>
    )

}

export default Header;