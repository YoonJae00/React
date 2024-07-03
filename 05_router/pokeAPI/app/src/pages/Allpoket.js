import axios from "axios";
import { useState, useEffect } from "react"
import Onepoket from "./Onepoket";


function AllPoket(){

    const [urlMax, seturlMax] = useState([]);

    const [poket, setpoket] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then(res => res.data)
            .then(data => {
                seturlMax(data.results)
            })
    }, []);

    useEffect(() => {
        
    }, [urlMax]);

    return(
        <>
            {urlMax.map(poket => <Onepoket key={poket.name} url={poket.url} name={poket.name}/>)}
        </>
    )
}


export default AllPoket