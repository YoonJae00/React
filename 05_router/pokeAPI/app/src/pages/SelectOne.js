import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SelectOne() {

    
    const { name } = useParams();
    const [Imgs, setImgs] = useState("");
    

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-form/${name}`)
        .then(res => setImgs(res.data.sprites.front_shiny))
        .catch(error => console.error( error));
    }, []);


    return(
        <>
        {Imgs ?  <img src={Imgs} style={{width : '300px', height : '300px'}}/>
        : <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"/>}
           
        </>
    )
}

export default SelectOne;