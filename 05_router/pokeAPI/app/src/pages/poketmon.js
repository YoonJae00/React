import { useState } from 'react';
import axios from 'axios';


function SearchPoketmon() {
    const [imgs, setImgs] = useState(null);  // 기본값을 null로 설정
    const [input, setInput] = useState("");
  
    const onClickHandler = () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon-form/${input}`)
        .then(res => setImgs(res.data.sprites.front_shiny))
        .catch(error => console.error( error));
    };
  
    return (
      <>
        <label>영어로 포켓몬 이름 검색하세요</label>
        <input type="text" onChange={e => setInput(e.target.value)}/>
        <button onClick={onClickHandler}>검색</button>
        { imgs ? <img src={imgs} alt="Pokemon" /> : <div>다시 검색하세요</div>}
      </>
    );
  }

  export default SearchPoketmon