import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"

import CardGame from './src/components/CardsGame';

const $root = document.querySelector("#root");
const $mtmlCardGame = CardGame()

$root.insertAdjacentHTML("beforeend", $mtmlCardGame)