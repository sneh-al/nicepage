import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className='tile is-ancestor my-0   '>
      <div className='tile is-horizontal'>
        {cards.map((card, i) => (
          <div
            key={i}
            className={`tile is-child  has-background-${card.color}      `}>
            <div className='p-4' style={{ height: "100%" }}>
              <Card card={card} />
            </div>
          </div>
        ))}
        <div className='tile is-child  is-hidden-mobile'></div>
      </div>
    </div>
  );
};

export default Cards;

const cards = [
  {
    id: 1,
    color: "danger",
    name: "Schematic Design",
    detials:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  },
  {
    id: 2,
    color: "warning",
    name: "Construction Documents",
    detials:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  },
  {
    id: 3,
    color: "black",

    name: "Construction",
    detials:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  },
  {
    id: 1,
    color: "dark",

    name: "Build Construction",
    detials:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  },
];
