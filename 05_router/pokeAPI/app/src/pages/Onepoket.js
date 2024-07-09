import { useState } from "react";
import { Link } from "react-router-dom";

function Onepoket({url,name}) {

    const [isHovered, setisHovered] = useState(false);

    const linkContainerStyle = {
        padding: '10px',
        backgroundColor: isHovered ? 'lightblue' : 'transparent',
        cursor: isHovered ? 'pointer' : 'default',
        transition: 'background-color 0.3s, cursor 0.3s',
      };
    

    return(
        <div
        style={linkContainerStyle}
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
      >
            <Link to={`/select/${name}`}>
            <div>이름 : {name}</div>
            </Link>
        </div>
    )
}

export default Onepoket