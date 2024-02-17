import Charmander from '../../public/charmander.png';

const Card = () => {
  return (
    <div className="card ">
      <div className="flex flex-row border-2 border-black rounded-lg  m-5 max-w-[300px]">
        <div className="left-container flex items-center justify-center  m-[1px] min-w-[50%]">
          {' '}
          <img src={Charmander} alt="" className="" />
        </div>
        <div className="right-container flex flex-col justify-center p-2">
          {' '}
          <h1>Charmander</h1>
          <p>Height: 30</p>
          <p>Weight: 30</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
