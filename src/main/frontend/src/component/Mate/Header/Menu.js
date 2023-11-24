import { Fade } from "react-reveal";

const Menu = () => {
  const urlObj = {
    "일감 검색하기": "/search",
    "내 활동 관리": "/manage",
    "마이페이지": "/mypage",
  };

  const menuItems = Object.entries(urlObj).map(([label, url]) => (
    <li key={url} className="small_menu_item"><a href={'/mate'+url}>{label}</a></li>
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
