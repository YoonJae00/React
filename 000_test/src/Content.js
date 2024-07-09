import {useContext} from "react";
import App from "./App";
import { DarkModeContext } from "./App";

function Content() {

    const context = useContext(DarkModeContext);

    const {color} = context;

    const style = { 
        backgroundColor : color,
        color : "black"
    }

    return(

        <div className="content" style={style}>
            <p>Content 영역입니다. 내용을 작성하세요</p>    
        </div>

    )

}

export default Content;