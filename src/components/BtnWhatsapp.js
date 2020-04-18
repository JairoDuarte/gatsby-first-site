import React from "react";
import wa from "../assets/whatsapp.png";

export default function BtnWhatsapp() {
  return (
    <div className="bg-white shadow rounded px-5 py-2 flex flex-col items-center sm:mt-0 mt-6 sm:flex-row">
      <img src={wa} width="80px" alt="whatsapp" />
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-2xl">Orçar seu Projeto</h3>
        <p className="text-xs">Projeto e orçamento sem comprimisso</p>
        <p className="font-bold">+24492339999</p>
      </div>
    </div>
  );
}
