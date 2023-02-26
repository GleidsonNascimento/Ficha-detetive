import React, { useContext, useState, useEffect } from "react";
import { GamerContext } from "../gamerContext";
import "./game1.css";

export default function Gamer1() {
  const { allCards } = useContext(GamerContext);

  const numPlayers = 8;

  const [playerNames, setPlayersNames] = useState(Array(numPlayers).fill(""));

  const cardsByCategory = [
    {
      title: "Suspeitos",
      cards: allCards.filter((card) => card.type === "suspect"),
    },
    {
      title: "Locais",
      cards: allCards.filter((card) => card.type === "location"),
    },
    {
      title: "Armas",
      cards: allCards.filter((card) => card.type === "weapon"),
    },
  ];

  const removePlayer = (index) => {
    setPlayerCards((prevPlayerCards) => {
      const newPlayerCards = [...prevPlayerCards];
      newPlayerCards.splice(index, 1);
      return newPlayerCards.map((cards, i) => {
        return cards.map((card) => ({ ...card, checked: false }));
      });
    });
  };

  const [playerCards, setPlayerCards] = useState(
    Array(numPlayers)
      .fill()
      .map(() => allCards.map((card) => ({ ...card, checked: false })))
  );
  useEffect(() => {
    const checkboxes = document.querySelectorAll(".check");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          this.parentElement.classList.add("noite");
          this.parentElement.classList.remove("claro");
        } else {
          this.parentElement.classList.add("claro");
          this.parentElement.classList.remove("noite");
        }
      });
    });
  }, []);

  const handleCardCheck = (playerIndex, cardId) => {
    setPlayerCards((prevPlayerCards) => {
      const newPlayerCards = [...prevPlayerCards];
      const cardIndex = newPlayerCards[playerIndex].findIndex(
        (card) => card.id === cardId
      );
      newPlayerCards[playerIndex][cardIndex].checked =
        !newPlayerCards[playerIndex][cardIndex].checked;
      return newPlayerCards;
    });
  };

  const handlePlayerNameChange = (event, playerIndex) => {
    const newName = event.target.value;
    setPlayersNames((prevPlayerNames) => {
      const newPlayerNames = [...prevPlayerNames];
      newPlayerNames[playerIndex] = newName;
      return newPlayerNames;
    });
  };

  return (
    <div className="background">
      <div className="background-2">
        <h1>Cartela de jogadores Detetive </h1>
        <div className="players">
          {playerCards.map((cards, index) => (
            <div className="player" key={index}>
              <h3>
                Jogador {index + 1}{" "}
                <input
                  className="name"
                  type="text"
                  value={playerNames[index]}
                  onChange={(event) => handlePlayerNameChange(event, index)}
                />
                <button className="remove" onClick={() => removePlayer(index)}>
                  x
                </button>
              </h3>

              {cardsByCategory.map((category) => (
                <div key={category.title}>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.cards.map((card) => (
                      <li
                        key={card.id}
                        className={`card ${card.checked ? "noite" : "claro"}`}
                      >
                        <input
                          className="check"
                          type="checkbox"
                          checked={card.checked}
                          onChange={() => handleCardCheck(index, card.id)}
                        />{" "}
                        <p>{card.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="resultado">
          <h1>Resultado</h1>
          {cardsByCategory.map((category) => (
            <div key={category.title}>
              <h3>{category.title}</h3>
              <ul>
                {category.cards.map((card) => (
                  <li
                    key={card.id}
                    className={`card ${card.checked ? "noite" : "claro"}`}
                  >
                    <input
                      className="check"
                      type="checkbox"
                      checked={card.checked}
                    />{" "}
                    <p>{card.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
