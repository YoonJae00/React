import menus from '../data/menu-detail.json';

/* json 파일로부터 전체 메뉴 리스트 반환해보기 */
export function getMenuList() {

    /* json 으로 파싱 된 데이터를 반환한다. */
    return menus;

}

export function getMenuDetail(id) {

    console.log("detail 페이지에서 넘어오는 메뉴코드 값". id);
    // 문자열로 넘어옴 
    // menuCode 는 숫자이므로 parseInt 로 파싱해줘야함
    console.log(typeof id)

    const menu = menus.find(menu => menu.menuCode === parseInt(id));
    console.log(menu);

    return menu
}

export function searchMenu(searchName) {

    /* 
        filter, map, match
        match : 포함 여부에 따라서 인수값이 포함되어 있으면 객체를 반환해준다.
    */


    return menus.filter(menu => menu.menuName.match(searchName))
}