import { Fade } from "react-reveal";

const Menu = () => {
  const urlObj = {
    "간병인 추천받기": "/suggestion",
    "원하는 간병인 찾기": "/search",
    "환자 등록하기": "/add_patient",
    "간병 예약하기": "/reservation",
    "예약내역 확인": "/reservation_list",
    "마이페이지": "/mypage"
  };

  const menuItems = Object.entries(urlObj).map(([label, url]) => (
    <li key={url} className="small_menu_item"><a href={'/family'+url}>{label}</a></li>
  ));

  return (
    <div className="Menu">
      <Fade>
      <ul className="small_menu">
        {menuItems}
      </ul>
      </Fade>
    </div>
  );
}

export default Menu;
