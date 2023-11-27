import { useNavigate } from 'react-router-dom';
import Header from '../../component/Mate/Header/Header';
import MenuList from '../../component/Mate/Header/MenuList';
import MainCard from '../../component/Main/MainCards';
import '../Main.css';

const Main = () => {
  const navigate = useNavigate();

  const navigateTo = (url) => {
    navigate(`/${url}`);
  };

  const cards = MenuList.map((e, index) => (
    <MainCard
      key={index}
      title={e.title}
      onClick={() => navigateTo(`mate/${e.url}`)}
      background={e.background}
    />
  ));

  return (
    <>
    <Header />
    <div className='Main Mate'>
      {cards}
    </div>
    </>
  );
}

export default Main;