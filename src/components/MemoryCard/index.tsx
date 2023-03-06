/* External dependencies */
import { Col, Divider, Row } from "antd";
import { useState } from "react";

/* Local dependencies */
import { gameCards } from "./helper";
import OneCard from "./OneCard";
import "./MemoryCard.scss";

const MemoryCard = () => {
  const [gameLevel, setGameLevel] = useState(6);
  return (
    <div className="memoryRow">
      {gameCards.slice(0, gameLevel).map((card) => (
        <OneCard key={card.key} img={card.img} imgAlt={card.key} />
      ))}
    </div>
  );
};

export default MemoryCard;
