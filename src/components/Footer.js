import React from "react";
import BtnWhatsapp from "./BtnWhatsapp";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-200 sm:flex justify-between items-center">
      <div className="">
        <h1 className="font-bold text-xs">Rosa</h1>
        <p className="text-xs">Móveis Lindos</p>
      </div>
      <BtnWhatsapp />
    </footer>
  );
}
