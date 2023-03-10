/* External dependencies */
import { Button, Modal } from 'antd';
import {useEffect, useState, useRef} from "react";

/* Local dependencies */
import {GameCard, gameCards, shuffle} from "./helper";
import "./MemoryCard.scss";
import OneCard from "./OneCard";

const MemoryCard = () => {
  const [cards, setCards] = useState(shuffle([...gameCards, ...gameCards]));
  const [gameLevel, setGameLevel] = useState(12);
  const [openPair, setOpenPair] = useState<number[]>([]);
  const [countWin, setCountWin] = useState(0);
  const [inactiveCards, setInactiveCards]= useState<number[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let timeout:NodeJS.Timeout;
  function handleOpenCard(index: number) {
    setOpenPair(prev => [...prev, index]);
  }

  function handleCheck(){
    const [firstInd, secondInd] = openPair;

    if(cards[firstInd].key === cards[secondInd].key){
      setCountWin((prev) => prev + 1);
      setInactiveCards(prev => [...prev, firstInd, secondInd])
    }

    timeout = setTimeout(() => {
      setOpenPair([]);
      setIsDisabled(false);
    }, 600);
  }

  useEffect(() => {
    let timer:NodeJS.Timeout;
    const len = openPair.length;

    if(len === 2) {
      setIsDisabled(true);
      timer = setTimeout(handleCheck, 400)
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(timeout);
    };
  }, [openPair])

  useEffect(() => {
    if(inactiveCards.length === gameLevel){
      showModal();
      handleRestart()
    }
  }, [inactiveCards])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function handleRestart(){
    setIsModalOpen(false);
    setOpenPair([]);
    setCountWin(0);
    setInactiveCards([]);
    setIsDisabled(false);
  }

  return (
      <div>
        <h2>Found pair: {countWin}</h2>

        <div className="memoryRow">
          {cards.slice(0, gameLevel).map((card: GameCard, index) => (
            <OneCard
              key={index}
              img={card.img}
              keyName={card.key}
              onClick={handleOpenCard}
              index={index}
              isFlipped={openPair.includes(index)}
              isInactive={inactiveCards.includes(index)}
              isDisabled={isDisabled}
            />
          ))}
        </div>

        <Modal title="Congratz!🤩" open={isModalOpen} onOk={handleRestart} okText={'Yes! Restart'} onCancel={handleCancel}>
          <p>You won the game!</p>
          <p>Do you want to play again?</p>
        </Modal>
      </div>
  );
};

export default MemoryCard;
