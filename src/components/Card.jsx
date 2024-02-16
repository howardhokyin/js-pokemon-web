import Charmander from '../../public/charmander.png';

const Card = () => {
  return (
    <div className="card">
      <h1>pokemon name</h1>
      <img src={Charmander}></img>
      <p>other fields</p>
    </div>
  );
};

export default Card;
