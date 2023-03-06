/* External dependencies */
import { useState } from "react";

/* Local dependencies */
import "./MemoryCard.scss";
import backLogo from "../../assets/images/naruto_logo_game.png";

interface OneCardProps {
  img: string;
  imgAlt: string;
}

const OneCard = ({ img, imgAlt }: OneCardProps) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`one-card ${show ? "is-flipped" : ""}`}
      onClick={() => setShow((prev) => !prev)}
    >
      <img className="one-card__front" src={img} alt={imgAlt} />
      <img className="one-card__back" src={backLogo} alt="back logo" />
    </div>
  );
};

export default OneCard;
