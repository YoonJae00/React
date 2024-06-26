import {useContext} from "react";
import {useState} from "react";
import { DarkModeContext } from "./App";

function Footer() {

            const context = useContext(DarkModeContext);

            const {color, setcolor} = context;

            const [footercolor, setfootercolor] = useState("pink");

            const style = {
                backgroundColor : footercolor,
                color : "black"
            }

            return (
                <footer className="footer" style={style}>
                    <label>background Color : </label>
                    <input type="text" value={color} onChange={e => setcolor(e.target.value)}/>
                    <br/>
                    <label>footer Color : </label>
                    <input type="text" value={footercolor} onChange={ e => setfootercolor(e.target.value)}/>
                    CopyRight2024, footer 영역
                </footer>
            )

}

export default Footer;