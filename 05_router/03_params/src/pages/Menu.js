import {useEffect, useState} from 'react';
import {getMenuList} from '../api/MenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// 쿼리스트링으로 작성한 url 요청을 도와줄 수 있는 hooks
import {searchMenu} from '../api/MenuAPI'

function Menu() {

    

    const [menuList, setmenuList] = useState([]);
    const [searchValue, setsearchValue] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        console.log(getMenuList());

        setmenuList(getMenuList());
    }, [])

    const onClickHandler = () => {
        // 검색 버튼을 누르면 쿼리스트링 형태로 검색어를 전달할 수 이쎅 만듦
        // useNavigate 훅을 사용해서 이동 가능
        navigate(`/menu/search?menuName=${searchValue}`)
    }

    const onChangeHandler = e => {
        console.log('작동함??')
        setsearchValue(e.target.value)
     
        console.log(e.target.value)
        setmenuList(searchMenu(e.target.value))
    
    }

    return(
        <>
        <input type='search' name='menuName' onChange={onChangeHandler}/>
        {searchValue ?  <div><h1>메뉴 검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div></div>
       :  <div>
       <h1>판매 메뉴 목록</h1>
       <div>
           <input type='search' name='menuName' onChange={ e => {
               setsearchValue(e.target.value)
           }}/>
           <button onClick={onClickHandler}>메뉴이름 검색</button>
       </div>
       <div className={boxStyle.MenuBox}>
           {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
       </div> </div> 

        }
        </>
    );
}

export default Menu;