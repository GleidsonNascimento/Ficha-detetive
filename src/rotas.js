import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Gamer1 from "./components/game1/game1";
import { GamerContext, Provider } from "./components/gamerContext";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Gamer1 />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
