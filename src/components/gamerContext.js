import React, {createContext} from "react";

export const GamerContext = createContext();

export const Provider = ({children}) =>{
  const allCards = [
    { id: 1, type: "suspect", name: "sargento - bigode" },
    { id: 2, type: "suspect", name: "florista" },
    { id: 3, type: "suspect", name: "chef de cozinha" },
    { id: 4, type: "suspect", name: "mordomo" },
    { id: 5, type: "suspect", name: "médica" },
    { id: 6, type: "suspect", name: "dançarina" },
    { id: 7, type: "suspect", name: "coveiro" },
    { id: 8, type: "suspect", name: "advogado" },
    { id: 9, type: "location", name: "prefeitura" },
    { id: 10, type: "location", name: "restaurante" },
    { id: 11, type: "location", name: "floricultura" },
    { id: 12, type: "location", name: "boate" },
    { id: 13, type: "location", name: "hospital" },
    { id: 14, type: "location", name: "mansão" },
    { id: 15, type: "location", name: "cemiterio" },
    { id: 16, type: "location", name: "praça" },
    { id: 17, type: "location", name: "hotel" },
    { id: 18, type: "location", name: "banco" },
    { id: 19, type: "location", name: "estação de trem" },
    { id: 20, type: "weapon", name: "espingarda" },
    { id: 21, type: "weapon", name: "corda" },
    { id: 22, type: "weapon", name: "pá" },
    { id: 23, type: "weapon", name: "pé de cabra" },
    { id: 24, type: "weapon", name: "tesoura" },
    { id: 25, type: "weapon", name: "arma quimica" },
    { id: 26, type: "weapon", name: "veneno" },
    { id: 27, type: "weapon", name: "soco inglês" },
    { id: 28, type: "weapon", name: "faca" },
  ];  
      return(
        <GamerContext.Provider value={{allCards}}>
            {children}
        </GamerContext.Provider>
      )
}