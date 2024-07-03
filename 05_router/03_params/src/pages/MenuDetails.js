import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import {getMenuDetail} from "../api/MenuAPI"

function MenuDetail() {
    
    const [menu, setmenu] = useState(null);

    const { menuCode } = useParams();

    console.log('adsad',menuCode);
    console.log('menu',menu)

    useEffect(() => {
        setmenu(getMenuDetail(menuCode))
    }, []);

    return(
        <>
            {menu ?  <> <h2>메뉴 상세 설명</h2>
            <h3>메뉴 이름 :{menu.menuName} </h3>
            <h3>메뉴 가격 :{menu.price} </h3>
            <h3>메뉴 종류 :{menu.categoryName} </h3>
            <h3>메뉴 설명 :{menu.detail.description} </h3>

            <img src={menu.detail.image} style={{maxWidth: 500}} /> </>:
            <img src="https://i.gifer.com/ZZ5H.gif"/>}
           
        </>
    );
}

export default MenuDetail;