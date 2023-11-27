import suggestion_img from '../../../assets/img/icon/main-suggest.png';
import search_img from '../../../assets/img/icon/main-search.png';
import patient_img from '../../../assets/img/icon/main-patient.png';
import reservation_img from '../../../assets/img/icon/main-reservation.png';
import reservation_list_img from '../../../assets/img/icon/main-reservation-list.png';
import mypage_img from '../../../assets/img/icon/main-mypage.png';

const MenuList = [
    {
      title: '간병인 추천받기',
      url: 'suggestion',
      background: suggestion_img,
    },
    {
      title: '원하는 간병인 찾기',
      url: 'search',
      background: search_img,
    },
    {
      title: '환자 등록하기',
      url: 'add_patient',
      background: patient_img,
    },
    {
      title: '간병 예약하기',
      url: 'reservation',
      background: reservation_img,
    },
    {
      title: '예약내역 확인',
      url: 'reservation_list',
      background: reservation_list_img,
    },
    {
      title: '마이페이지',
      url: 'mypage',
      background: mypage_img,
    },
  ];

export default MenuList;