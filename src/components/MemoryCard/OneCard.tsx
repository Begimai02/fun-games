/* External dependencies */
import { useState } from "react";

/* Local dependencies */
import "./MemoryCard.scss";
import backLogo from "../../assets/images/naruto_logo_game.png";
import { GameCard } from "./helper";
import {isDisabled} from "@testing-library/user-event/dist/utils";

interface OneCardProps {
  img: string;
  keyName: string;
  onClick: ( keyName: number) => void;
  index: number;
  isFlipped: boolean;
  isInactive: boolean;
  isDisabled: boolean
}

const OneCard = ({ img, keyName, onClick, index, isFlipped, isInactive, isDisabled }: OneCardProps) => {

  function handleClick(index: number) {
    !isInactive && !isDisabled && onClick(index)
  }
  return (
    <div
      className={`one-card ${isFlipped ? "is-flipped" : ""} ${isInactive ? "is-inactive" : ''}`}
      onClick={() => handleClick(index)}
    >
      <img className="one-card__front" src={img} alt={keyName} />
      <img className="one-card__back" src={backLogo} alt="back logo" />
    </div>
  );
};

export default OneCard;
