import { useEffect, useState } from "react";
import axios from 'axios';

function Content() {
    const [airport, setairport] = useState(null);
    const [inputvalue, setinputvalue] = useState();
    
    console.log(airport);

    const onClickHandler = () => {
        axios.get(`https://apis.data.go.kr/B551177/StatusOfFacility/getFacilityKR?serviceKey=9ktrZDjbL2ms5oVfZdQgEV6e3ctbpkI5mvy3r97Wc6HqEStA0ANJP1EvHys6f7ZBbRg8M7ZoCA%2BHA2SSySuWBA%3D%3D&facility_nm=${inputvalue}&type=json&numOfRows=10&pageNo=1`)
        .then(res => res.data)
        .then(data => setairport(data))
        .catch(error => console.error('Error fetching data:', error));
    }

    return (
        <>
            <input type="text" onChange={e => setinputvalue(e.target.value)}/>
            <button onClick={onClickHandler}>검색</button>
            {airport ? 
                airport.response.body.items.map(item => <div key={item.facility_nm}>{item.lckoreannm}</div>)
                : <h1>검색하세요</h1>}
        </>
    );
}

export default Content;