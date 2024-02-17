import Charmander from '../image/charmander.png';
import { pokemonAPI } from '../api/pokemonAPI';
import Info from './Info';

const Card = () => {
  return (
    <a href="#" className="card ">
      <div>
        <Info />
      </div>
      <div className="flex flex-row border-2 border-black rounded-lg  m-5 min-w-[250px]">
        <div className="left-container flex items-center justify-center  m-[1px] max-w-[30%]">
          {' '}
          <img src={Charmander} alt="" className="" />
        </div>
        <div className="right-container flex flex-col justify-center p-2">
          {' '}
          <h1>{pokemonAPI.name}</h1>
        </div>
      </div>
    </a>
  );
};

export default Card;
