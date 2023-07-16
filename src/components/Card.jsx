import { BsChevronRight } from "react-icons/bs";

const Card = ({ card }) => {
  return (
    <div
      className='content  is-flex-direction-column  p-5'
      style={{ height: "100%", minHeight: 300 }}>
      <h1
        className={`${
          card.color == "warning" ? "has-text-black" : "has-text-white"
        } has-text-weight-bold  py-4 is-size-2 title `}>
        0{card.id}
      </h1>
      <h4
        className={`${
          card.color == "warning" ? "has-text-black" : "has-text-white"
        }`}>
        {card.name}
      </h4>
      <p
        className={`${
          card.color == "warning" ? "has-text-black" : "has-text-white"
        }`}>
        {card.detials}
      </p>
      <button
        className={`mt-2 p-4  is-rounded ${
          card.color == "warning"
            ? "has-background-black"
            : "has-background-white "
        }
          `}
        style={{ border: 0 }}>
        <svg
          className='  '
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='30px'
          height='30px'
          viewBox='0 0 50 80'
          xmlSpace='preserve'>
          <polyline
            fill='none'
            stroke={` ${card.color == "warning" ? "#fff" : "#000 "}`}
            strokeWidth='8'
            strokeLinecap='round'
            strokeLinejoin='round'
            points='
	0.375,0.375 45.63,38.087 0.375,75.8 '
          />
        </svg>
      </button>
    </div>
  );
};

export default Card;
