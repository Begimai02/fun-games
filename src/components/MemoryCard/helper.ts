/* Local dependencies */
import naruto from "../../assets/images/char_naruto.webp";
import pain from "../../assets/images/pain_game.png";
import jiraiya from "../../assets/images/jiraiya_game.webp";
import sakura from "../../assets/images/sakura.webp";
import sasuke from "../../assets/images/sasuke_game.webp";
import kakashi from "../../assets/images/kakashi_game.webp";

export interface GameCard {
  img: string;
  key: string;
}

export const gameCards: GameCard[] = [
  {
    img: naruto,
    key: "naruto",
  },
  {
    img: sasuke,
    key: "sasuke",
  },
  {
    img: pain,
    key: "pain",
  },
  {
    img: kakashi,
    key: "kakashi",
  },
  {
    img: jiraiya,
    key: "jiraiya",
  },
  {
    img: sakura,
    key: "sakura",
  },
  // {
  //   img: "",
  //   key: "",
  // },
];


function swap(array: GameCard[], i:number, j:number){
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
export function shuffle(arr: GameCard[]){
  const length = arr.length;

  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(arr, currentIndex, randomIndex)
  }
  return arr;

}