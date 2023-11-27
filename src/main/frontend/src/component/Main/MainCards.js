const MainCard = ({ title, onClick, background }) => {
  console.dir(background);
  return (
    <div className='MainCard' onClick={onClick}>
      <img src={background}/>
      {title}
    </div>
  );
};

export default MainCard;