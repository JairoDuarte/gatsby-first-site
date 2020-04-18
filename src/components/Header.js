import React from "react";
import BtnWhatsapp from "./BtnWhatsapp";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="p-4 bg-indigo-800 sm:flex justify-between items-center">
      <Logo />
      <BtnWhatsapp />
    </div>
  );
}
