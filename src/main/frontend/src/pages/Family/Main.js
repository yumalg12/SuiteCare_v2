import { useNavigate } from 'react-router-dom';
import Header from '../../component/Family/Header/Header';
import MenuList from '../../component/Family/Header/MenuList';
import MainCard from '../../component/Main/MainCards';
import '../Main.css';

const Main = () => {
  const navigate = useNavigate();

  const navigateTo = (url) => {
    navigate(`/${url}`);
  };

  const cards = MenuList.map((e, idx) => (
    <MainCard
      key={idx}
      title={e.title}
      onClick={() => navigateTo(`family/${e.url}`)}
      background={e.background}
    />
  ));

  return (
    <>
      <Header />
      <div className='Main Family'>
        {cards}
      </div>
    </>
  );
};

export default Main;
