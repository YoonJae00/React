import {useState, useEffect} from 'react'
import MenuItem from '../components/MenuItem'
import boxStyle from './Menu.module.css'
import {useSearchParams} from 'react-router-dom'    // 쿼리스트링 방식으로 넘어오는 값
import { searchMenu } from '../api/MenuAPI'

function MenuSearchResult() {

    const [menuList, setmenuList] = useState([]);

    const [searchParams] = useSearchParams()

    const searchMenuName = searchParams.get('menuName');

    console.log('menuList',menuList);

    useEffect(() => {
        setmenuList(searchMenu(searchMenuName))
    }, []);

    return(
        <>
            <h1>메뉴 검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    );
}

export default MenuSearchResult;