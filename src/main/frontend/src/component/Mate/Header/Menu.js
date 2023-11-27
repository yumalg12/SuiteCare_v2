import { Fade } from "react-reveal";
import MenuList from "./MenuList";

const Menu = () => {

  const menuItems = MenuList.map(e => (
    <li key={e.url} className="small_menu_item"><a href={'/mate/'+e.url}>{e.title}</a></li>
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
