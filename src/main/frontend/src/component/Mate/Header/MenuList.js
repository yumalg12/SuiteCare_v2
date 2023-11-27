import search_img from '../../../assets/img/icon/main-search.png';
import reservation_list_img from '../../../assets/img/icon/main-reservation-list.png';
import mypage_img from '../../../assets/img/icon/main-mypage.png';

const MenuList = [
  {
    title: '일감 검색하기',
    url: 'search',
    background: search_img,
  },
  {
    title: '내 활동 관리',
    url: 'manage',
    background: reservation_list_img,
  },
  {
    title: '마이페이지',
    url: 'mypage',
    background: mypage_img,
  },
];

export default MenuList;